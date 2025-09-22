import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './filters/filters.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [FormsModule, FiltersComponent, TableComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent {
  selectedTeam: string = 'All';
  selectedPosition: string = 'All';
  selectedPrice: string = 'Unlimited';

  constructor() {}
}
