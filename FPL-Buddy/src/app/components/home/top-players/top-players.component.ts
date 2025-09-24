import { Component } from '@angular/core';
import { PlayersService } from '../../../services/players.service';
import { CommonModule } from '@angular/common';
import { TeamsService } from '../../../services/teams.service';
import { CodeToPositionPipe } from '../../../pipes/code-to-position.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-players',
  standalone: true,
  imports: [CommonModule, CodeToPositionPipe],
  templateUrl: './top-players.component.html',
  styleUrl: './top-players.component.scss',
})
export class TopPlayersComponent {
  topPlayers: any;
  constructor(
    public playersService: PlayersService,
    public teamsService: TeamsService,
    private router: Router
  ) {
    this.playersService.getTopPlayers().subscribe((data) => {
      this.topPlayers = data;
      // console.log(data);
    });
  }

  goToPlayer(playerId: number) {
    this.router.navigate(['/player', playerId]);
  }
}
