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
  currentGameweek = 1;
  constructor(
    private fixturesService: FixturesService,
    public teamsService: TeamsService
  ) {
    this.fixturesService.getCurrentGameweek().subscribe({
      next: (data: any) => {
        this.currentGameweek = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.fixturesService.getFixturesByEvent(this.currentGameweek).subscribe({
      next: (data) => {
        // console.log(data);
        this.fixtures = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
