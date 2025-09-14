import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddDbDataComponent } from './components/add-db-data/add-db-data.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'add-db-data',
    component: AddDbDataComponent,
    title: 'Add Database Data',
  },
];
