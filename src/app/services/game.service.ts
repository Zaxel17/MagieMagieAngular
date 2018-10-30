import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }

  getListePartie(){
    return this.http.get<Game[]>('http://192.168.110.127:666/games/not-started');
  }

  creerPartie(post){
    return this.http.post('http://192.168.110.127:666/games',post[0]);
  }

  rejoindrePartie(gameid, userid){
    return this.http.post('http://192.168.110.127:666/games/:'+gameid+'/join/:'+userid,"" );

  }

}
