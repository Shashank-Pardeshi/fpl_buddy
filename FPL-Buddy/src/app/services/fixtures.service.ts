import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FixturesService {
  constructor(private http: HttpClient) {}

  getAllFixtures() {
    return this.http.get('http://localhost:3000/fixtures/allFixtures');
  }

  getCurrentGameweek() {
    return this.http.get('http://localhost:3000/fixtures/currentGameweek');
  }

  getFixturesByEvent(event: number) {
    return this.http.get(
      `http://localhost:3000/fixtures/fixturesByEvent/${event}`
    );
  }

  getFixturesByTeamId(teamId: number) {
    return this.http.get(
      `http://localhost:3000/fixtures/fixturesByTeamId/${teamId}`
    );
  }

  getFixturesByTeamIdAndGameweek(teamId: number, gameweek: number) {
    return this.http.get(
      `http://localhost:3000/fixtures/fixturesByTeamIdAndGameweek/${teamId}/${gameweek}`
    );
  }
}
