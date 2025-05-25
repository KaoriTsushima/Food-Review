import { Routes } from '@angular/router';
import { OfficeBreakfastComponent } from './components/office-breakfast/office-breakfast.component';
import { HomeComponent } from './components/home/home.component';
import { OutsideComponent } from './components/outside/outside.component';
import { OfficeLunchComponent } from './components/office-lunch/office-lunch.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'office-breakfast', component: OfficeBreakfastComponent },
  { path: 'office-lunch', component: OfficeLunchComponent },
  { path: 'outside', component: OutsideComponent },
];
