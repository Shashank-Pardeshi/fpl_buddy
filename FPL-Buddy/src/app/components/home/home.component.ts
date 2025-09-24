import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { CommonModule } from '@angular/common';
import { PlayersService } from '../../services/players.service';
import { Router, RouterLink } from '@angular/router';
import { UpcomingFixturesComponent } from './upcoming-fixtures/upcoming-fixtures.component';
import { TopPlayersComponent } from './top-players/top-players.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    UpcomingFixturesComponent,
    TopPlayersComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  playerId!: number;
  fixtureId = [1, 2, 3, 4, 5];

  constructor(
    private homeService: HomeService,
    private playersService: PlayersService,
    private router: Router
  ) {}
}
