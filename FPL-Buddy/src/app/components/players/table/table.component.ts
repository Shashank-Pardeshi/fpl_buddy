import { Component, model, OnChanges } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { PlayersService } from '../../../services/players.service';
import { CodeToPositionPipe } from '../../../pipes/code-to-position.pipe';
import { Router } from '@angular/router';
import { TeamsService } from '../../../services/teams.service';
import {
  CdkDropList,
  CdkDrag,
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    CodeToPositionPipe,
    NgIf,
    CdkDrag,
    DragDropModule,
    CdkDropList,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnChanges {
  selectedTeam = model('dfsa');
  selectedPosition = model('fsa');
  selectedPrice = model('fs');
  players!: any;
  parameter: String = '';
  order: number = 1;

  columns = [
    { key: 'name', label: 'Name' },
    { key: 'price', label: 'Price' },
    { key: 'form', label: 'Form' },
    { key: 'total_points', label: 'Total Points' },
    { key: 'points_per_game', label: 'Points Per Game' },
    { key: 'event_points', label: 'Points This Week' },
    { key: 'selected_by_percent', label: 'Selected By' },
    { key: 'starts', label: 'Starts' },
    { key: 'value_form', label: 'ROI Form' },
    { key: 'value_season', label: 'ROI Season' },
    { key: 'influence', label: 'Influence' },
    { key: 'creativity', label: 'Creativity' },
    { key: 'threat', label: 'Threat' },
    { key: 'ict_index', label: 'ICT Index' },
    { key: 'bonus', label: 'Bonus' },
    { key: 'bps', label: 'BPS' },
  ];

  constructor(
    private playersService: PlayersService,
    private router: Router,
    public teamsService: TeamsService
  ) {}

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

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  goToPlayerPage(event: Event, player: any) {
    this.router.navigateByUrl(`/player/${player.id}`);
  }

  sortByParameter(event: Event, parameter: string) {
    if (this.parameter === parameter) {
      this.order = this.order * -1;
    } else {
      this.parameter = parameter;
      this.order = 1;
    }
    if (parameter === 'price') {
      this.players = this.players.sort(
        (a: any, b: any) => (b.now_cost - a.now_cost) * this.order
      );
      return;
    }
    this.players = this.players.sort(
      (a: any, b: any) => (b[parameter] - a[parameter]) * this.order
    );
  }
}
