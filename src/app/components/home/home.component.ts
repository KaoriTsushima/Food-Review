import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private readonly router: Router){}
  title = 'food-review';

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
