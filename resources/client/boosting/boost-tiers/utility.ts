export const lockedSpawnedVehicle = (vehNet: number) => {
	const veh = NetToVeh(vehNet);
	SetVehicleDoorsLocked(veh, 1);
	SetVehicleDoorsLockedForPlayer(veh, PlayerId(), true);
	SetVehicleDoorsLockedForAllPlayers(veh, true);
};
