import { Component, OnInit } from '@angular/core';
import {Player} from "../models/player";
import {NgForm} from "@angular/forms";
import {Avatar} from "../models/avatar";
import {AvatarsService} from "../services/avatars.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  joueur:Player;
  avatars:Array<Avatar>;
  avatar:Avatar;
  newPseudo: string;
  newAvatar: string;

  constructor(private avatarservice:AvatarsService) {
    this.avatar = {_id: "", code: ""};
    this.joueur = {
      _id: "",
      isConnected: false,
      idCurrentGame: "",
      avatar: this.avatar,
      pseudo: "",
      nbCards: null,
      nbSleepingTurns: null,
      positionInGame: null
    };
    this.avatars = [];
    avatarservice.getAvatar()
      .subscribe(avas => {
        this.avatars = avas;
      });
  }

  ngOnInit() {

  }

  connexion(form:NgForm) {
    let pseudo = this.newPseudo;
    let i = this.avatars.findIndex(a => a.code==this.newAvatar);
    console.log(this.avatars[i]._id);
    console.log(this.avatars[i].code);

    this.joueur.isConnected = true;
    this.joueur.pseudo = pseudo;
    this.joueur.avatar = this.avatars[i];

  }
}
