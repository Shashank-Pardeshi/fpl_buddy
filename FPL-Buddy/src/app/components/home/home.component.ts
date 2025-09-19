import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { CommonModule } from '@angular/common';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';
import { PascalCasePipe } from '../../pipes/pascal-case.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  playerId!: number;

  constructor(
    private homeService: HomeService,
    private playersService: PlayersService,
    private router: Router
  ) {}

  // apiList = {
  //   'General Information': this.homeService.getGeneralInformation(),
  //   'Player Data': this.homeService.getPlayerData(this.playerId),
  //   'Fixtures-': this.homeService.getFixtures(),
  //   'Game Week Live Data': this.homeService.getGameWeekLiveData(this.playerId),
  //   'Manager History': this.homeService.getManagerHistory(this.playerId),
  //   'Manager Data': this.homeService.getManagerData(this.playerId),
  //   'League Standings': this.homeService.getleagueStandings(this.playerId),
  //   'My Teams': this.homeService.getMyTeams(this.playerId),
  //   'Team Per Week': this.homeService.getTeamPerWeek(
  //     this.playerId,
  //     this.playerId
  //   ),
  //   'Event Status': this.homeService.getEventStatus(),
  //   'Dream Team': this.homeService.getDreamTeam(this.playerId),
  //   'Set Piece Takers': this.homeService.getSetPieceTakers(),
  // };

  // list = Object.keys(this.apiList);
  goToPlayer() {
    this.router.navigateByUrl(`player/${this.playerId}`);
  }
}
