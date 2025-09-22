import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private http: HttpClient) {}

  getAllPlayers() {
    return this.http.get('http://localhost:3000/players/getAllPlayers');
  }

  getPlayerDataById(id: number) {
    return this.http.get(`http://localhost:3000/players/getPlayerById/${id}`);
  }

  getPlayerByTeamAndPositionAndPrice(
    team: string,
    position: string,
    price: string
  ) {
    return this.http.get(
      `http://localhost:3000/players/getPlayerByTeamAndPositionAndPrice/${team}/${position}/${price}`
    );
  }

  getAllElementTypes() {
    return this.http.get('http://localhost:3000/players/getAllElementTypes');
  }
}
