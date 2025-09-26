import { Component, signal } from '@angular/core';
import { PlayersService } from '../../../services/players.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeamsService } from '../../../services/teams.service';

@Component({
  selector: 'app-previous-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './previous-matches.component.html',
  styleUrl: './previous-matches.component.scss',
})
export class PreviousMatchesComponent {
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
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  home_away_apply(match: any) {
    return match.was_home ? 'home' : 'away';
  }

  getTeamCode(match: any) {
    return this.teamsService.getTeamCodeFromId(match.opponent_team);
  }
}
