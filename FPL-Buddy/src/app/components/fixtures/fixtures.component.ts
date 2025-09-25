import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixturesService } from '../../services/fixtures.service';
import { FixturesBoxComponent } from './fixtures-box/fixtures-box.component';
import { FixturesNavbarComponent } from './fixtures-navbar/fixtures-navbar.component';
import { GameweekControllerComponent } from './gameweek-controller/gameweek-controller.component';
import { TeamControllerComponent } from './team-controller/team-controller.component';
import { FixtureDifficultyBoxComponent } from './fixture-difficulty-box/fixture-difficulty-box.component';

@Component({
  selector: 'app-fixtures',
  standalone: true,
  imports: [
    CommonModule,
    FixturesBoxComponent,
    FixturesNavbarComponent,
    GameweekControllerComponent,
    TeamControllerComponent,
    FixtureDifficultyBoxComponent,
  ],
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.scss',
})
export class FixturesComponent {
  gameweek = 0;
  team = 0;
  tab = 'fixtures';

  constructor(public fixturesService: FixturesService) {
    this.fixturesService.getCurrentGameweek().subscribe({
      next: (data: any) => {
        this.gameweek = data;
      },
      error: (error) => {
        console.error('Error fetching current gameweek:', error);
      },
    });
  }
}
