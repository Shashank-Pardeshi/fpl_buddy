import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getGeneralInformation() {
    return this.http.get('http://localhost:3000/api/bootstrap-static');
  }

  getFixtures() {
    return this.http.get('http://localhost:3000/api/fixtures/');
  }

  getPlayerData(id: number) {
    return this.http.get(`http://localhost:3000/api/element-summary/${id}`);
  }

  getGameWeekLiveData(id: string) {
    return this.http.get(`http://localhost:3000/api/event/${id}/live/`);
  }

  getManagerHistory(id: string) {
    return this.http.get(`http://localhost:3000/api/entry/${id}/history/`);
  }

  getManagerData(id: string) {
    return this.http.get(`http://localhost:3000/api/entry/${id}`);
  }

  getleagueStandings(id: string) {
    return this.http.get(
      `http://localhost:3000/api/leagues-classic/${id}/standings/`
    );
  }

  getMyTeams(id: string) {
    return this.http.get(`http://localhost:3000/api/my-team/${id}/my-team/`);
  }

  getTeamPerWeek(id: string, gw: string) {
    return this.http.get(
      `http://localhost:3000/api/entry/${id}/event/${gw}/picks/`
    );
  }

  getEventStatus() {
    return this.http.get(`http://localhost:3000/api/event-status/`);
  }

  getDreamTeam(gw: string) {
    return this.http.get(`http://localhost:3000/api/dream-team/`);
  }

  getSetPieceTakers() {
    return this.http.get(`http://localhost:3000/api/set-piece-takers/`);
  }
}
