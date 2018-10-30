import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {

  }

postPlayer(post){
  this.http
    .post('http://192.168.110.127:666/login', post)
    .subscribe(
      (players) => {
        return players;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}
}
