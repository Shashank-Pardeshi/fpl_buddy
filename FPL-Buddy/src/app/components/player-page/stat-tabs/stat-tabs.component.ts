import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PascalCasePipe } from '../../../pipes/pascal-case.pipe';

@Component({
  selector: 'app-stat-tabs',
  standalone: true,
  imports: [CommonModule, PascalCasePipe],
  templateUrl: './stat-tabs.component.html',
  styleUrl: './stat-tabs.component.scss',
})
export class StatTabsComponent implements OnInit {
  playerData = input();
  player: any;
  tab: string = 'stats';
  playerDataKeys: any;

  constructor() {}

  ngOnInit(): void {
    this.player = this.playerData();
    this.playerDataKeys = Object.keys(this.player?.[this.tab] || {});
  }

  changeTab(event: Event, tab: string) {
    this.tab = tab;
    this.playerDataKeys = Object.keys(this.player[tab]);
  }
}
