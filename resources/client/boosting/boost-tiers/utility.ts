import {BlipColor, Game, Vector3, World} from '@nativewrappers/client';
import {Delay} from '@utils/*';
import {exp} from '../main';

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
	const blip = World.createBlip(coords, 5.0);
	blip.Name = 'Boost Location';
	blip.ShowRoute = true;
	blip.Sprite = 175;
	blip.Color = BlipColor.Yellow;
	SetBlipRouteColour(blip.Handle, BlipColor.Yellow);

	const boostTick = setTick(async () => {
		if (Game.PlayerPed.Position.distance(coords) < 10) {
			await Delay(250);
			blip.delete();
			clearTick(boostTick);
		}
	});
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
