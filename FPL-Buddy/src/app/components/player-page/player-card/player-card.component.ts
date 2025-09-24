import { Component, input, OnInit } from '@angular/core';
import { CodeToPositionPipe } from '../../../pipes/code-to-position.pipe';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CodeToPositionPipe],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent implements OnInit {
  playerData = input();
  player: any;

  ngOnInit(): void {
    this.player = this.playerData();
  }
}
