import { Component, model, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamsService } from '../../../services/teams.service';
import { PlayersService } from '../../../services/players.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  selectedTeam = model.required();
  selectedPosition = model.required();
  selectedPrice = model.required();

  resetFlag = computed(() => {
    return (
      this.selectedTeam() !== 'All' ||
      this.selectedPosition() !== 'All' ||
      this.selectedPrice() !== 'Unlimited'
    );
  });

  teams: any;
  positions: any;
  prices: number[] = [
    150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75,
    70, 65, 60, 55, 50, 45, 40, 35,
  ];

  constructor(
    private teamsService: TeamsService,
    private playersService: PlayersService
  ) {
    this.getAllTeams();
    this.getAllPositions();
  }

  getAllTeams() {
    this.teams = this.teamsService.getAllTeams();
  }

  getAllPositions() {
    this.playersService.getAllElementTypes().subscribe({
      next: (res) => {
        // console.log(res);
        this.positions = res;
      },
      error: (error) => {
        console.log('Error fetching positions data', error);
      },
    });
  }

  reset() {
    this.selectedTeam.set('All');
    this.selectedPosition.set('All');
    this.selectedPrice.set('Unlimited');
  }
}
