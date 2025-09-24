import { Component } from '@angular/core';
import { FixturesService } from '../../../services/fixtures.service';
import { TeamsService } from '../../../services/teams.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-fixtures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-fixtures.component.html',
  styleUrl: './upcoming-fixtures.component.scss',
})
export class UpcomingFixturesComponent {
  fixtures: any;
  constructor(
    private fixturesService: FixturesService,
    public teamsService: TeamsService
  ) {
    this.fixturesService.getFixturesByEvent(1).subscribe({
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
