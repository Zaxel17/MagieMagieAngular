import {Avatar} from "./avatar";

export class Player {
    _id: string;
    isConnected: boolean;
    idCurrentGame: string;
    avatar: Avatar;
    pseudo: string;
    positionInGame: number;
    nbSleepingTurns: number;

    nbCards:number;
}