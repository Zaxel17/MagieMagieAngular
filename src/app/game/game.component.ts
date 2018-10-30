import { Component, OnInit } from '@angular/core';
import {Player} from '../models/player';
import {Card} from '../models/card';
import {GameActionService} from '../services/game-action.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  joueurs:Player[];
  cartes_joueur:Card[]; /* carte du joueur pricnipal */
  sortsDisponible: Array<boolean>; /* états des 5 sorts disponnible renvoyé aprés analyse du jeu */
  principal:Player;
  autresJoueurs:Player[];
  gameId: string;
  userId: string;

  constructor(private gameactionservice:GameActionService) {
    this.gameId = '5555';
    this.userId = '55';
    this.joueurs = [];
    this.cartes_joueur = [];
    this.sortsDisponible = [];

    gameactionservice.getEtatPartie(this.gameId,this.userId)
      .subscribe(joueur => {
        this.userId = joueur;
      });


    gameactionservice.getListeDesCartes(this.userId)
    .subscribe(Card => {
        this.cartes_joueur = Card;
      });
    }


    arrayN(n){
    return Array(n);
  }

  ngOnInit() {

 /*   this.joueurs = [ { _id: '14589', isConnected: true, idCurrentGame: 'AAA', avatar: {_id: 'effe', code: 'avatar1'}, pseudo: 'PAULETTE', positionInGame: 1, nbSleepingTurns: 0, nbCards:7 },
      { _id: '147859', isConnected: true, idCurrentGame: 'AAA', avatar: {_id: 'efddfe', code: 'avatar2'}, pseudo: 'CRAPAUD', positionInGame: 2, nbSleepingTurns: 0, nbCards:7 },
      { _id: '2459', isConnected: true, idCurrentGame: 'AAA', avatar: {_id: 'e7575e', code: 'avatar3'}, pseudo: 'TOTOCHE', positionInGame: 3, nbSleepingTurns: 0, nbCards:7 },
      { _id: '89589', isConnected: true, idCurrentGame: 'AAA', avatar: {_id: '142', code: 'avatar4'}, pseudo: 'DUDULE', positionInGame: 4, nbSleepingTurns: 0, nbCards:7 },
      { _id: '85489', isConnected: true, idCurrentGame: 'AAA', avatar: {_id: '456', code: 'avatar5'}, pseudo: 'BILOUTE', positionInGame: 5, nbSleepingTurns: 0, nbCards:7 }
    ];





    this.cartes_joueur = [ { _id: '992544', name: 'ee',  code: 'AERTTRZEZ'},
      { _id: '88542', name: 'ttt',  code: 'ER35TEDZ'},
      { _id: '77854', name: 'yy',  code: 'AJDSQ58Z'},
      { _id: '66678', name: 'rr',  code: 'A5HTDDZ'},
      { _id: '55784', name: 'rr',  code: 'A46YHDZ'},
      { _id: '48522', name: 'rr',  code: 'ACFRDZ8Z'},
      { _id: '14735', name: 'ee',  code: 'A2ZSGT4EDZ'}
      ];
  */
    this.sortsDisponible = [true,false,true,true,false];


       var test = '';

       var jeuHTML = ''; /* toute la construction HTML du jeu */

/*
/!*

    var posLeft = 0;
    var posLeftIncrementation = 0;
    /!* Joueur Adverse *!/
    if      (nombre_de_joueurs===3) { posLeft = 521; posLeftIncrementation = 521; }
    else if (nombre_de_joueurs===4) { posLeft = 300; posLeftIncrementation = 482; }
    else if (nombre_de_joueurs===5) { posLeft = 160; posLeftIncrementation = 415; }
    else { posLeft = 782; posLeftIncrementation = 0; } // 2 joueurs

*/

/*
    /!* Placement de la pioche *!/
    jeuHTML += '';

    /!* JOUEUR PRINCIPAL *!/
    jeuHTML += '<div class="avatar_'+avatars_joueurs[0]+' avatar_joueur"></div><div class="nom_joueur">'+noms_joueur[0]+'</div><ul class="cartes_joueur">';
    for(var cj=0;cj<cartes_joueur[0].length;cj++) { jeuHTML += '<li><div class="carte_'+cartes_joueur[0][cj]+' taille_carte_normal"></div></li>'; }
    jeuHTML += '</ul>';

    /!* POUR LES JOUEURS ADVERSES *!/
    for(var jadv=1;jadv<nombre_de_joueurs;jadv++) {
      jeuHTML += '<ul class="cartes_joueur_adverse joueur_adverse_'+jadv+'">';
      for(var cja=0;cja<cartes_joueur[jadv].length;cja++) { jeuHTML += '<li><div class="carte_dos"></div></li>'; }
      jeuHTML += '</ul><div class="avatar_'+avatars_joueurs[jadv]+' avatar_joueur_adverse" id="joueur_'+jadv+'"></div><div class="nom_joueur_adverse" id="nom_joueur_'+jadv+'">'+noms_joueur[jadv]+'</div>';
    }

    /!* AFFICHAGE DES TABLES INITIALE *!/
    document.getElementById('jeu').innerHTML = jeuHTML;
*/

/*
    /!* AVATARS DES JOEURS ADVERSES *!/
    var poseLeftAv=posLeft;
    for(var j=1;j<nombre_de_joueurs;j++) {
      $('#joueur_'+j).css("left",(poseLeftAv-30)+"px"); /!* AVATARS *!/
      $('#nom_joueur_'+j).css("left",(poseLeftAv-55)+"px"); /!* NOM DU JOUEUR *!/
      poseLeftAv = poseLeftAv + posLeftIncrementation;
    }
/!* Mise en éventails des cartes *!/
    function afficherCartesEnEventaille(idHTML,nombre_de_cartes,rayon,radInit,limitRad,leftInit,topInit) {
      var rad = radInit;

      function mettreUneCarteEnEventail(i) {
        if (i > nombre_de_cartes) {
          return;
        }
        var posX = Math.round((Math.cos(rad)*rayon)+leftInit);
        var posY = Math.round((Math.sin(rad)*rayon)+topInit);

        document.querySelector('.'+idHTML+' li:eq('+i+')').style.transform = "translate("+posX+"px,"+posY+"px) rotate("+(rad+1)+"rad)";
        $().css("transform",");
        $('.'+idHTML+' li:eq('+i+')').css("-moz-transform","translate("+posX+"px,"+posY+"px) rotate("+(rad+1)+"rad)");
        $('.'+idHTML+' li:eq('+i+')').css("-webkit-transform","translate("+posX+"px,"+posY+"px) rotate("+(rad+1)+"rad)");
        $('.'+idHTML+' li:eq('+i+')').css("-o-transform","translate("+posX+"px,"+posY+"px) rotate("+(rad+1)+"rad)");
        $('.'+idHTML+' li:eq('+i+')').css("transition","all .3s ease");
        rad = rad + (limitRad/nombre_de_cartes);
        setTimeout(function() {
          mettreUneCarteEnEventail(i+1);
        }, 100);
      }
      mettreUneCarteEnEventail(0);
    }*/
/*
    /!* Cartes du Joueur *!/
    afficherCartesEnEventaille('cartes_joueur',cartes_joueur[0].length,600,16.6,1.5,-340,860);

    /!* Joueur Adverse *!/
    posLeftJA = posLeft-1200-posLeftIncrementation;
    function afficherJeuxJoueursAdverses(j) {
      if (j > nombre_de_joueurs) {
        return;
      }
      afficherCartesEnEventaille('joueur_adverse_'+j,cartes_joueur[j].length,130,12.2,4,posLeftJA,-320);
      posLeftJA+= posLeftIncrementation;
      setTimeout(function() {
        afficherJeuxJoueursAdverses(j+1);
      }, 800);
    }

    afficherJeuxJoueursAdverses(0);


    /!* MASQUES SUR LES COMBINAISONS DE SORT
        0 = sort_invisibilite
        1 = sort_philtre
        2 = sort_hypnose
        3 = sort_divination
        4 = sort_sommeil
    *!/
    for(sort=0;sort<5;sort++) {
      if (sortsDisponible[sort]===true) {
        $('#sort_'+sort).css("border-color","#FF5700");
        $('#sort_'+sort).css("border-size","5px");
        $('#sort_'+sort).css("border-style","solid");
        $('#sort_'+sort).css("border-radius","10px");
        $('#sort_'+sort).css("background-color","#FF5700");
        $('#sort_'+sort+' span').attr("title","Sort disponible, Cliquez pour l'utiliser"); }
      else {
        $('#sort_'+sort+' span').css("opacity",".50");
        $('#sort_'+sort+' span').attr("title","Sort indisponible"); }
    }
*/

    /*

        // TEST **************************************************
	test  += j+' ==>>> posLeft='+posLeft+' <br/>';
	test  += i+' ==>>> Degrée='+degree+'° / Gauche posX='+posX+' / TOP posY='+posY+'<br/>';

    // FIN TEST **********************************************
    */



    document.getElementById('test').innerHTML = "<br />" + test;




  }

}
