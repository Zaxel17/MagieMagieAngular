import { Injectable } from '@angular/core';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {Avatar} from "../models/avatar";

@Injectable({
  providedIn: 'root'
})
export class AvatarsService {

  constructor(private http:HttpClient) {

  }

  getAvatar(){
    return this.http.get<Avatar[]>('http://192.168.110.127:666/avatars');
  }

}
