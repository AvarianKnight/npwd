import {Game, Model, Vector3, World} from '@nativewrappers/client';
import {BOOSTING_APP, BoostMissionEvents} from '@typings/boosting';
import {boosterProfile, exp} from '../main';
import {BPlayer} from './main';

export const pedRadius = 30;

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
	ClearGpsPlayerWaypoint();

	SendNUIMessage({
		app: BOOSTING_APP,
		method: BoostMissionEvents.FAIL_VEHICLE,
		data: BPlayer.active,
	});
};

export const randomWeaponSelector = () => {
	const weaponList = [
		'WEAPON_PISTOL_MK2',
		'WEAPON_BAT',
		'WEAPON_APPISTOL',
		'WEAPON_DBSHOTGUN',
		'WEAPON_DAGGER',
		'WEAPON_PISTOL',
	];

	return weaponList[Math.floor(Math.random() * weaponList.length + 0)];
};

export const getRandomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min);
};

export const spawnPed = async (coord: Vector3, radius: number, pedCount: number) => {
	for (let i = 1; i <= pedCount; i++) {
		const ped = await World.createPed(
			new Model('A_M_M_EastSA_01'),
			spawnPedRadius(coord, radius),
			0.0,
			true,
		);

		//ped combat
		SetPedCombatAttributes(ped.Handle, 3, false);
		SetPedCombatAttributes(ped.Handle, 5, true);
		SetPedCombatAttributes(ped.Handle, 46, true);
		SetEntityAsMissionEntity(ped.Handle, false, false);
		SetPedAccuracy(ped.Handle, 100);
		SetPedMaxHealth(ped.Handle, 400);
		SetEntityHealth(ped.Handle, 400);
		GiveWeaponToPed(ped.Handle, GetHashKey(randomWeaponSelector()), 5000, true, true);
		SetPedSuffersCriticalHits(ped.Handle, false);
		SetRagdollBlockingFlags(ped.Handle, 1);
		SetPedDropsWeaponsWhenDead(ped.Handle, false);
		TaskCombatPed(ped.Handle, Game.PlayerPed.Handle, 0, 16);
		SetPedKeepTask(ped.Handle, true);
	}
};
