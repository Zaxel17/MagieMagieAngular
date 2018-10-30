import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from '../models/game';
import {Card} from '../models/card';
import {Player} from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class GameActionService {

  constructor(private http:HttpClient) {

  }

  getEtatPartie(gameId,userId){ // Etat d’une partie
    return this.http.get<{ game: Game, players : {principal : Player, others : Player[ ]} }>('http://192.168.110.127:666/games/'+gameId+'/state/'+userId);
  }

  getPasserSonTour(gameId,userId){ // Passer son tour
    return this.http.post('http://192.168.110.127:666/games/'+gameId+'/action/'+userId+'/skip-turn',"");
  }

  getListeDesCartes(userId){ // Liste des cartes
    return this.http.get<Card[]>('http://192.168.110.127:666/cards');
  }



}
