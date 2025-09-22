import { Component, model, OnChanges, effect } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { PlayersService } from '../../../services/players.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnChanges {
  selectedTeam = model('dfsa');
  selectedPosition = model('fsa');
  selectedPrice = model('fs');
  players!: any;

  constructor(private playersService: PlayersService) {}

  ngOnChanges() {
    this.playersService
      .getPlayerByTeamAndPositionAndPrice(
        this.selectedTeam(),
        this.selectedPosition(),
        this.selectedPrice()
      )
      .subscribe({
        next: (players) => {
          this.players = players;
        },
        error: (error) => {
          console.log('Error fetching players data', error);
        },
      });
  }
}
