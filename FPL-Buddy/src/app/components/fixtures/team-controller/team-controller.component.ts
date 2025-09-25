import { Component, model } from '@angular/core';
import { TeamsService } from '../../../services/teams.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-controller.component.html',
  styleUrl: './team-controller.component.scss',
})
export class TeamControllerComponent {
  team = model<number>(0);
  teamArray = [];

  constructor(public teamsService: TeamsService) {
    this.teamArray = this.teamsService.getAllTeams();
    // console.log(this.teamArray);
  }

  selectTeam(event: Event, team: any) {
    this.team.set(team.id);
  }
}
