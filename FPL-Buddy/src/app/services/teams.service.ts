import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getAllTeams() {
    return this.http.get('http://localhost:3000/teams/getAllTeams');
  }
}
