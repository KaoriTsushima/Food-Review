import { Component, inject } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Review } from '../../types/review';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewDataService } from '../../services/review-data.service';

@Component({
  selector: 'app-office-breakfast',
  standalone: true,
  imports: [NzIconModule, CommonModule, ReviewCardComponent],
  templateUrl: './office-breakfast.component.html',
  styleUrl: './office-breakfast.component.css',
})
export class OfficeBreakfastComponent {
  private readonly reviewDataService = inject(ReviewDataService);
  reviews = this.reviewDataService.getReviews();
}
