import {Player} from "./player";

export class Game {
    id: string;
    isStarted: boolean;
    idWinner: string;
    currentPlayerPosition: number;
    name:string;
    players: Player[];

  constructor(name){
    this.name = name;
  }
}
