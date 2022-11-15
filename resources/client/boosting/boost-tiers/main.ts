import './utility';
import './low';
import './medium';
import './high';
import {Vector3} from '@nativewrappers/client';

export interface BPlayerType {
	active: boolean;
	dropOffCoords?: Vector3;
	firstLegCompleted?: boolean;
	secondLegCompleted?: boolean;
	spawnPedTick?: number | null;
	dropOffTick?: number | null;
	hackTick?: number | null;
	pdTick?: number | null;
	promptHack?: boolean;
}

export const BPlayer: BPlayerType = {
	active: false,
	dropOffCoords: null,
	firstLegCompleted: false,
	secondLegCompleted: false,
	spawnPedTick: null,
	dropOffTick: null,
	hackTick: null,
	pdTick: null,
	promptHack: false,
};
