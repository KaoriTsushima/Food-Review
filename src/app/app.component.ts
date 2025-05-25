import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { filter, Subscription } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzLayoutModule, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  headerVisible: boolean = false;
  routerSub: Subscription;
  constructor(private readonly router: Router) {
    this.routerSub = router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.headerVisible = event.url !== '/';
      });
  }
  title = 'food-review';

  // todo ngDestroy remove subscription
}
