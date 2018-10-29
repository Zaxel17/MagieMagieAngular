import {Player} from "./player";

export class Game {
    id: string;
    isStarted: boolean;
    idWinner: string;
    currentPlayerPosition: number;

    players: Player[];
}