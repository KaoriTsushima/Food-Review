import { Routes } from '@angular/router';
import { OfficeBreakfastComponent } from './components/office-breakfast/office-breakfast.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'office-breakfast', component: OfficeBreakfastComponent },
];
