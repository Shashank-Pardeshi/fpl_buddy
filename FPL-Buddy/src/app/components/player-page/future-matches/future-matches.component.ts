import { Component, signal } from '@angular/core';
import { PlayersService } from '../../../services/players.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeamsService } from '../../../services/teams.service';

@Component({
  selector: 'app-future-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './future-matches.component.html',
  styleUrl: './future-matches.component.scss',
})
export class FutureMatchesComponent {
  playerData: any;
  playerId = signal(0);

  constructor(
    private playersService: PlayersService,
    private activatedRoute: ActivatedRoute,
    public teamsService: TeamsService
  ) {
    this.activatedRoute.params.subscribe((value) => {
      this.playerId.set(value['id']);
    });

    this.playersService.getPlayerDetailsByPlayerId(this.playerId()).subscribe({
      next: (data) => {
        this.playerData = data;
        console.log(this.playerData);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  home_away_apply(match: any) {
    return match.is_home ? 'home' : 'away';
  }

  getTeamCode(match: any) {
    if (match.is_home) {
      return this.teamsService.getTeamCodeFromId(match.team_a);
    }
    return this.teamsService.getTeamCodeFromId(match.team_h);
  }
}
