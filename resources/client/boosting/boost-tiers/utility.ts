import {Vector3} from '@nativewrappers/client';
import {boosterProfile, exp} from '../main';
import {BPlayer} from './main';

export const pedRadius = 30;

// Mission variables
// export let dropOffCoords: Vector3;
// export let firstLegCompleted = false;
// export let secondLegCompleted = false;
// export let spawnPedTick: number;
// export let dropOffTick: number;
// export let hackTick: number;
// export let promptHack = false;

export const dropOffSpot = () => {
	const garages = exp['pma-garage'].AllPublicGarages();
	const GarageList: {[key: string]: Vector3} = {};

	Object.keys(garages).map((k: string) => {
		GarageList[k] = JSON.parse(garages[k]);
	});

	const garageList = Object.values(GarageList);
	const dropoff = garageList[Math.floor(Math.random() * (garageList.length - 0) + 0)];
	return dropoff;
};

/**
 * Show Route to boost location or drop off location
 * @param coords
 */
export const showRoute = (coords: Vector3) => {
	SetNewWaypoint(coords.x, coords.y);
};

export const spawnPedRadius = (coords: Vector3, radius: number) => {
	const rcs: Vector3 = new Vector3(
		coords.x +
			Math.floor(Math.random() * (radius - 1) + 1) * (Math.round(Math.random()) ? 1 : -1),
		coords.y +
			Math.floor(Math.random() * (radius - 1) + 1) * (Math.round(Math.random()) ? 1 : -1),
		coords.z,
	);

	while (!GetSafeCoordForPed(rcs.x, rcs.y, rcs.z, true, 1)[1]) {
		rcs.x =
			coords.x +
			Math.floor(Math.random() * (radius - 1) + 1) * (Math.round(Math.random()) ? 1 : -1);
		rcs.y =
			coords.y +
			Math.floor(Math.random() * (radius - 1) + 1) * (Math.round(Math.random()) ? 1 : -1);
		rcs.z = coords.z;
	}

	return rcs;
};

exports('spawnPedRadius', spawnPedRadius);

export const calculateExperience = () => {
	const level = boosterProfile.profile.level;
	const experienceGain = experienceGainPerLevel(level);
	boosterProfile.profile.experience = (
		Number(boosterProfile.profile.experience) + experienceGain
	).toString();
	if (Number(boosterProfile.profile.experience) > 100 && boosterProfile.profile.level < 5) {
		boosterProfile.profile.experience = '0';
		boosterProfile.profile.level = boosterProfile.profile.level + 1;
	}
	return boosterProfile.profile;
};

const experienceGainPerLevel = (level: number) => {
	switch (level) {
		case 1:
			return 1.0;
			break;
		case 2:
			return 0.75;
			break;
		case 3:
			return 0.5;
			break;
		case 4:
			return 0.25;
			break;
	}
};

on('pma:onPlayerDeath', () => {
	if (BPlayer.active) {
		resetBoostMissions();
	}
});

export const resetBoostMissions = () => {
	BPlayer.active = false;
	BPlayer.dropOffCoords = null;
	BPlayer.firstLegCompleted = false;
	BPlayer.secondLegCompleted = false;
	clearTick(BPlayer.spawnPedTick);
	BPlayer.spawnPedTick = null;
	clearTick(BPlayer.dropOffTick);
	BPlayer.dropOffTick = null;
	clearTick(BPlayer.hackTick);
	BPlayer.hackTick = null;
	BPlayer.promptHack = null;
};

export const randomWeaponSelector = () => {
	const weaponList = [
		'WEAPON_PISTOL_MK2',
		'WEAPON_BAT',
		'WEAPON_APPISTOL',
		'WEAPON_CRUTCH',
		'WEAPON_DAGGER',
		'WEAPON_GUITAR',
	];

	return weaponList[Math.floor(Math.random() * weaponList.length + 0)];
};
