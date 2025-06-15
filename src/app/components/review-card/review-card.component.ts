import { Component, Input } from '@angular/core';
import { Review } from '../../types/review';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [NzCardModule, CommonModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css',
})
export class ReviewCardComponent {
  @Input() review: Review | null = null;
}
