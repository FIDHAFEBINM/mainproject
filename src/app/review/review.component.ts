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
 
  // @Input() courseId!: string  // Accept course ID as input   

  // id:string=''
  // stars: number[] = [1, 2, 3, 4, 5];
  // rating: number = 0;
  // review: string = '';
  // showReviewForm: boolean = false;

  // constructor(private mainserve:MainService){} 

  // ngOnInit(): void {
  //   if (this.courseId) {
  //     console.log('Course ID received in app-review:', this.courseId);
  //   }
  //   this.id = localStorage.getItem('loginId') || '';
  // }

  // rate(star: number) {
  //   this.rating = star;
  // }

  // toggleReviewForm() {
  //   this.showReviewForm = !this.showReviewForm;
  // }

  // loaduserreview(){
     
  // }

  // submitReview() {

  //   const reviewData = {
  //     user: this.id,                // Ensure it's the user ID from localStorage
  //     course: this.courseId,        // Course ID passed as input
  //     review: this.review,
  //     rating: this.rating
  //   };
  //   this.mainserve.addreview(reviewData).subscribe((res:any)=>{
  //     alert("succesfully added")
  //   })
  //   console.log(`Rating: ${this.rating}`);
  //   console.log(`Review: ${this.review}`);
  //   // Optionally hide the form after submission
  //   this.showReviewForm = false;
  // }

  @Input() courseId!: string; // Accept course ID as input

  id: string = '';
  stars: number[] = [1, 2, 3, 4, 5];
  rating: number = 0;
  review: string = '';
  showReviewForm: boolean = false;
  
  // Flag to indicate that review already exists
  reviewSubmitted: boolean = false;

  // To store the loaded review data (assuming the returned data includes an _id field)
  existingReview: any = null;

  constructor(private mainserve: MainService) { }

  ngOnInit(): void {
    // Get logged in user
    this.id = localStorage.getItem('loginId') || '';
    this.loadUserReview()
    // If a course ID is provided, try to load any existing review for this user-course combination.
    if (this.courseId && this.id) {
      this.loadUserReview();
    }
  }

  // Called to load existing review if one exists.
  loadUserReview() {
    this.mainserve.getUserReview(this.courseId, this.id).subscribe(
      (res: any) => {
        // Assuming the API returns null if no review exists or returns an object with review details.
        if (res && res._id) {
          this.existingReview = res;
          this.reviewSubmitted = true;
          // Set the current rating & review text so they appear in the UI.
          this.rating = res.rating;
          this.review = res.review;
        }
      },
      (error) => {
        console.error('Error loading review', error);
      }
    );
  }

  // Allows users to choose the rating.
  rate(star: number) {
    this.rating = star;
  }

  // Toggle the review form visibility
  toggleReviewForm() {
    this.showReviewForm = !this.showReviewForm;
  }

  // Submits the review. If a review already exists, it calls the edit service; otherwise, it adds a new one.
  submitReview() {
    const reviewData = {
      user: this.id,                // user ID from localStorage
      course: this.courseId,        // Course ID passed as input
      review: this.review,
      rating: this.rating
    };

    if (this.reviewSubmitted && this.existingReview) {
      // Call editreview if review exists. Assuming existingReview holds an _id field.
      this.mainserve.editreview(reviewData, this.existingReview._id).subscribe(
        (res: any) => {
          alert("Review updated successfully");
          // Update local state with potentially returned updated info.
          this.existingReview = res;
          // Optionally, refresh the page or re-load the review.
          this.showReviewForm = false;
        },
        (error) => {
          console.error("Error updating review", error);
        }
      );
    } else {
      // Add new review if one doesn't exist.
      this.mainserve.addreview(reviewData).subscribe(
        (res: any) => {
          alert("Review submitted successfully");
          // Mark review as submitted and store the returned review.
          this.reviewSubmitted = true;
          this.existingReview = res;
          this.showReviewForm = false;
        },
        (error) => {
          console.error("Error submitting review", error);
        }
      );
    }
    this.loadUserReview()
    console.log(`Rating: ${this.rating}`);
    console.log(`Review: ${this.review}`);
  }

}
