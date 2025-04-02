import { CommonModule } from '@angular/common';
import { Component,OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
 
  @Input() courseId!: string  // Accept course ID as input   

  id:string=''
  stars: number[] = [1, 2, 3, 4, 5];
  rating: number = 0;
  review: string = '';
  showReviewForm: boolean = false;

  constructor(private mainserve:MainService){}

  ngOnInit(): void {
    if (this.courseId) {
      console.log('Course ID received in app-review:', this.courseId);
    }
    this.id = localStorage.getItem('loginId') || '';
  }

  rate(star: number) {
    this.rating = star;
  }

  toggleReviewForm() {
    this.showReviewForm = !this.showReviewForm;
  }

  submitReview() {

    const reviewData = {
      user: this.id,                // Ensure it's the user ID from localStorage
      course: this.courseId,        // Course ID passed as input
      review: this.review,
      rating: this.rating
    };
    this.mainserve.addreview(reviewData).subscribe((res:any)=>{
      alert("succesfully added")
    })
    console.log(`Rating: ${this.rating}`);
    console.log(`Review: ${this.review}`);
    // Optionally hide the form after submission
    this.showReviewForm = false;
  }

}
