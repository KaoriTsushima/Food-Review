import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzLayoutModule, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private readonly router: Router) {}
  title = 'food-review';

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
