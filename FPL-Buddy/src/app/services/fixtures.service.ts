import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FixturesService {
  constructor(private http: HttpClient) {}

  getFixturesByEvent(event: number) {
    return this.http.get(
      `http://localhost:3000/fixtures/fixturesByEvent/${event}`
    );
  }

  getAllFixtures() {
    return this.http.get('http://localhost:3000/fixtures/allFixtures');
  }
}
