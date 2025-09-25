import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixturesService } from '../../../services/fixtures.service';
import { TeamsService } from '../../../services/teams.service';

@Component({
  selector: 'app-fixtures-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fixtures-box.component.html',
  styleUrl: './fixtures-box.component.scss',
})
export class FixturesBoxComponent implements OnChanges {
  gameweek = input<number>(0);
  team = input<number>(0);

  fixtures: any;
  groupedMatches: Record<string, any[]> = {};

  constructor(
    private fixturesService: FixturesService,
    public teamsService: TeamsService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.fixturesService
      .getFixturesByTeamIdAndGameweek(this.team(), this.gameweek())
      .subscribe({
        next: (data) => {
          this.fixtures = data;
          this.groupMatchesByDate();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  groupMatchesByDate() {
    this.groupedMatches = this.fixtures?.reduce((acc: any, match: any) => {
      const date = new Date(match.kickoff_time).toLocaleDateString('en-CA', {
        timeZone: 'Asia/Kolkata',
      });

      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(match);
      return acc;
    }, {} as Record<string, any[]>);
  }
}
