import { Component, numberAttribute } from '@angular/core';
import { FixturesService } from '../../../services/fixtures.service';
import { TeamsService } from '../../../services/teams.service';
import { CommonModule } from '@angular/common';
import { error } from 'node:console';

@Component({
  selector: 'app-upcoming-fixtures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-fixtures.component.html',
  styleUrl: './upcoming-fixtures.component.scss',
})
export class UpcomingFixturesComponent {
  fixtures: any;
  currentGameweek = 0;
  constructor(
    private fixturesService: FixturesService,
    public teamsService: TeamsService
  ) {
    this.fixturesService.getCurrentGameweek().subscribe({
      next: (data: any) => {
        this.currentGameweek = data;
        this.fixturesService
          .getFixturesByEvent(this.currentGameweek)
          .subscribe({
            next: (data) => {
              this.fixtures = data;
            },
            error: (error) => {
              console.error('There was an error!', error);
            },
          });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
