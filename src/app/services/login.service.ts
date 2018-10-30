import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {

  }

postPlayer(post){
  return this.http.post('http://192.168.110.127:666/login', post);
}
}
