import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent implements OnInit {
  playerData = input();
  player: any;
  a: number = 0;
  elementTypes = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  ngOnInit(): void {
    this.player = this.playerData();
    this.a = this.player?.personal_details.element_type || 0;
  }
}
