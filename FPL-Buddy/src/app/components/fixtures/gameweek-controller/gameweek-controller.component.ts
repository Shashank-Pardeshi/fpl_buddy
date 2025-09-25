import { Component, model } from '@angular/core';
import { FixturesService } from '../../../services/fixtures.service';

@Component({
  selector: 'app-gameweek-controller',
  standalone: true,
  imports: [],
  templateUrl: './gameweek-controller.component.html',
  styleUrl: './gameweek-controller.component.scss',
})
export class GameweekControllerComponent {
  gameweek = model<number>(0);

  constructor(private fixturesService: FixturesService) {}

  onGameweekChange(event: any, dir: string) {
    if (dir === 'prev' && this.gameweek() > 1) {
      this.gameweek.update((value) => value - 1);
    } else if (dir === 'next' && this.gameweek() < 38) {
      this.gameweek.update((value) => value + 1);
    }
  }
}
