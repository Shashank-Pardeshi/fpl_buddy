import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PascalCasePipe } from '../../../pipes/pascal-case.pipe';
import { PlayersService } from '../../../services/players.service';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { StatTabsComponent } from '../stat-tabs/stat-tabs.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [CommonModule, PlayerCardComponent, StatTabsComponent],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.scss',
})
export class PlayerPageComponent {
  playerId: any = '';
  playerCode: any;
  playerData: any;

  constructor(
    private playersService: PlayersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((value) => {
      this.playerId = value['id'];
      console.log(value['id']);
    });

    this.playersService.getPlayerDataById(this.playerId).subscribe((data) => {
      this.playerData = data;
      // console.log('player', data);

      // this.playerDataKeys = Object.keys(this.playerData?.data['stats']);
    });
  }
}
