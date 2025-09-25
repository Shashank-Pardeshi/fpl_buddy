import { Component, model } from '@angular/core';
import { FixturesService } from '../../../services/fixtures.service';

@Component({
  selector: 'app-fixtures-navbar',
  standalone: true,
  imports: [],
  templateUrl: './fixtures-navbar.component.html',
  styleUrl: './fixtures-navbar.component.scss',
})
export class FixturesNavbarComponent {
  tab = model<string>('');
  gameweek = model<number>(0);
  team = model<number>(0);

  constructor(private fixturesService: FixturesService) {}

  changeTag(event: Event, value: string) {
    this.tab.set(value);
  }

  switchGameweek() {
    if (this.gameweek() == 0) {
      this.fixturesService.getCurrentGameweek().subscribe({
        next: (data: any) => {
          this.gameweek.set(data);
        },
        error: (error) => {
          console.error('Error fetching current gameweek:', error);
        },
      });
    } else {
      this.gameweek.set(0);
    }
  }

  switchTeam() {
    if (this.team() == 0) {
      this.team.set(1);
      // console.log(this.team());
    } else {
      this.team.set(0);
    }
  }
}
