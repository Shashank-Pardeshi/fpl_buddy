import { Component } from '@angular/core';
import { AddDbDataService } from '../../services/add-db-data.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-db-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-db-data.component.html',
  styleUrl: './add-db-data.component.scss',
})
export class AddDbDataComponent {
  constructor(
    private addDbDataService: AddDbDataService,
    private toast: ToastrService
  ) {}

  eventList = [
    'elements',
    'teams',
    'chips',
    'element_stats',
    'element_types',
    'events',
    // 'game_config',
    // 'game_settings',
    'phases',
  ];

  updateData(event: Event, api: string) {
    console.log(api);
    this.addDbDataService.updateData(api).subscribe({
      next: (response) => {
        console.log('Data updated successfully', response);
        this.toast.success('Data updated successfully');
      },
      error: (error) => {
        console.error('Error updating data', error);
        this.toast.error('Error updating  data');
      },
    });
  }
}
