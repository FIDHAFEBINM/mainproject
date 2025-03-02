import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  rating: number = 0;
  reviewText: string = '';
  showReviewForm: boolean = false;

  rate(star: number) {
    this.rating = star;
  }

  toggleReviewForm() {
    this.showReviewForm = !this.showReviewForm;
  }

  submitReview() {
    console.log(`Rating: ${this.rating}`);
    console.log(`Review: ${this.reviewText}`);
    // Optionally hide the form after submission
    this.showReviewForm = false;
  }

}
