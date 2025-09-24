import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddDbDataComponent } from './components/add-db-data/add-db-data.component';
import { PlayerPageComponent } from './components/player-page/player-page.component';
import { PlayersComponent } from './components/players/players.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'add-db-data',
    component: AddDbDataComponent,
    title: 'Add Database Data',
  },
  {
    path: 'player/:id',
    component: PlayerPageComponent,
    title: 'Player data',
  },
  {
    path: 'players',
    component: PlayersComponent,
    title: 'Players',
  },
  {
    path: 'fixtures',
    component: FixturesComponent,
    title: 'Fixtures',
  },
];
