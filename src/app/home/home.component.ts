import { Component, OnInit } from '@angular/core';
import {Player} from "../models/player";
import {NgForm} from "@angular/forms";
import {Avatar} from "../models/avatar";
import {AvatarsService} from "../services/avatars.service";
import {LoginService} from "../services/login.service";
import {Game} from '../models/game';
import {GameService} from "../services/game.service";

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

  listepartie:Game[];
  gameName:string;

  constructor(private avatarservice:AvatarsService, private logservice:LoginService, private gameService:GameService) {
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

    let post = [];
    post.push(pseudo);
    post.push(this.avatars[i]._id);
    this.logservice.postPlayer(post)
      .subscribe(
      (players:Player) => {
        this.joueur = players;
      });

    this.listeGame()
  }

  listeGame(){
    this.gameService.getListePartie().subscribe( games => {
      this.listepartie = games;
    });
  }

  createGame(f: NgForm) {
    let post = [];
    post.push(this.gameName);
    console.log(post);
    this.gameService.creerPartie(post).subscribe((game:Game) => {
      this.listepartie.push(game);
    })

  }
}
