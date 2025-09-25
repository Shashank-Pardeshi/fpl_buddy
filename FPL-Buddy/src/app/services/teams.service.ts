import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private teamMap: Record<number, { name: string; shortName: string }> = {};
  teams: any;

  constructor(private http: HttpClient) {
    this.http
      .get<any[]>('http://localhost:3000/teams/getAllTeams')
      .subscribe((teams) => {
        this.teams = teams;
        this.teamMap = teams.reduce((acc, t) => {
          acc[t.id] = {
            name: t.name,
            shortName: t.short_name,
          };
          return acc;
        }, {} as Record<number, { name: string; shortName: string }>);
      });
  }

  getAllTeams() {
    return this.teams;
  }

  getTeamName(id: number): string {
    return this.teamMap[id]?.name || 'Unknown';
  }

  getTeamShortName(id: number): string {
    return this.teamMap[id]?.shortName || 'UNK';
  }

  getTeam(id: number): { name: string; shortName: string } {
    return this.teamMap[id] || { name: 'Unknown', shortName: 'UNK' };
  }

  getTeamCodeFromId(id: number): number {
    const team = this.teams?.find((t: any) => t.id === id);
    return team ? team.code : -1;
  }

  getTeamIdFromCode(code: string): number {
    const team = this.teams.find((t: any) => t.code === code);
    return team ? team.id : -1;
  }
}
