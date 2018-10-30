import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GameComponent} from './game/game.component';

export const routes:Route[] = [
  {path:'', component:HomeComponent}
  {path:'game', component:GameComponent}
]
