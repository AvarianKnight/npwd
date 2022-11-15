import {Control, Game, Vector3} from '@nativewrappers/client';
import {BoostingEvents, BOOSTING_APP, BoostMissionEvents, Contract} from '@typings/boosting';
import {Delay} from '@utils/*';
import {PMA} from '../../client';
import {MidTierCoords} from '../coords';
import {boosterProfile, exp} from '../main';
import {BPlayer} from './main';
import {
	calculateExperience,
	dropOffSpot,
	getRandomInt,
	pedRadius,
	resetBoostMissions,
	sendText,
	showRoute,
	spawnPed,
} from './utility';

// TriggerServerEvent('pma-dispatch:addNewCall', GetHashKey('10-89'), { table.unpack(GetEntityCoords(PlayerPedId())) })

export const mediumTierHandler = (contract: Contract, totalCoins: number) => {
	const randomCoords = MidTierCoords[Math.floor(Math.random() * (MidTierCoords.length - 1))];
	emitNet(BoostingEvents.START_CONTRACT, contract, randomCoords, totalCoins);
};

let timeLeft = 6000;
let hackPassed = false;
onNet(BoostingEvents.MID_TIER_MISSION, (vehNet: number, coords: Vector3) => {
	sendText(
		'The boosted car is located on your GPS; get there before someone else does. If it is not there when you arrive, you are out of luck.',
	);

	// if active is true you cannot start another mission at the same time.
	BPlayer.active = true;
	showRoute(coords);
	let showDropOff = false;
	const randomSeconds = getRandomInt(12, 15) * 1000;
	const randomRounds = getRandomInt(2, 5);

	BPlayer.spawnPedTick = setTick(async () => {
		if (
			exp['pma-inv'].getInventoryItem('lockpick').quantity > 0 &&
			Game.PlayerPed.Position.distance(coords) < 3 &&
			IsControlJustPressed(0, Control.Pickup)
		) {
			//ped handle
			// const rcs = spawnPedRadius(coords, pedRadius);
			spawnPed(coords, pedRadius, getRandomInt(1, 3));
			BPlayer.firstLegCompleted = true;
			//After boosting vehicle, be directed to drop off location.
			clearTick(BPlayer.spawnPedTick);
			BPlayer.spawnPedTick = null;
		}
	});

	BPlayer.pdTick = setTick(async () => {
		if (!BPlayer.firstLegCompleted) return;
		const veh = GetVehiclePedIsEntering(Game.PlayerPed.Handle);
		if (veh === 0) return;
		const boostedVehNet = VehToNet(veh);

		//Alert PD
		while (timeLeft >= 0) {
			await Delay(0);
			if (timeLeft === 6000 || timeLeft === 4000 || timeLeft === 2000 || timeLeft === 0) {
				if (timeLeft === 6000) {
					sendText('10 minutes... PD is headed to you, keep driving!');
				} else if (timeLeft === 4000) {
					sendText(
						'5 minutes... you got this! Focus and drive like your life depends on it',
					);
				} else if (timeLeft === 2000) {
					sendText('3 minutes... nearly done... but wait..');
				} else if (timeLeft === 0) {
					sendText('You did it... get this vehicle stored immediately.');
				}

				const vehModel = GetEntityModel(veh);
				emitNet(
					'pma-dispatch:addNewCall',
					GetHashKey('10-89'),
					GetEntityCoords(PlayerPedId(), true),
					`('%s was reported stolen'):format(hashLabels[${vehModel}] or GetLabelText(GetDisplayNameFromVehicleModel(${vehModel})))`,
					GetVehicleNumberPlateText(veh),
				);
			}

			if (Game.PlayerPed.isInAnyVehicle() && !BPlayer.promptHack && timeLeft === 3250) {
				BPlayer.promptHack = true;
				exp['pma-hack'].startHacking(randomSeconds, randomRounds, (success: boolean) => {
					if (success) {
						hackPassed = true;
					} else {
						// reset boost if failed
						resetBoostMissions(true);
						emitNet(BoostMissionEvents.FAIL_VEHICLE);
					}
				});
			}

			if (boostedVehNet === vehNet && !showDropOff && hackPassed && timeLeft === 0) {
				showDropOff = true;
				BPlayer.dropOffCoords = dropOffSpot();
				showRoute(BPlayer.dropOffCoords);
				BPlayer.secondLegCompleted = true;
			}

			timeLeft--;
		}
	});

	BPlayer.dropOffTick = setTick(async () => {
		// only the driver will be able to get the reward, they will have to swap seats.
		if (
			hackPassed &&
			timeLeft === -1 &&
			Game.PlayerPed.Position.distance(BPlayer.dropOffCoords) < 10
		) {
			const veh = GetVehiclePedIsIn(Game.PlayerPed.Handle, false);
			const boostedVehNet = VehToNet(veh);
			if (
				boostedVehNet === vehNet &&
				Game.PlayerPed.Position.distance(BPlayer.dropOffCoords) < 5 &&
				IsControlJustPressed(0, Control.Pickup)
			) {
				const vehProps = PMA.Game.GetVehicleProperties(veh);
				boosterProfile.profile = calculateExperience();
				SendNUIMessage({
					app: BOOSTING_APP,
					method: BoostingEvents.LOAD_BOOSTING_PROFILE,
					data: boosterProfile,
				});
				resetBoostMissions(false);
				emitNet(BoostMissionEvents.REWARD_VEHICLE, vehProps, boosterProfile.profile);
			}
		}
	});
});
