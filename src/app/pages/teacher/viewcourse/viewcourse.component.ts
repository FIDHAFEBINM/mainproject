import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-viewcourse',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './viewcourse.component.html',
  styleUrl: './viewcourse.component.css'
})
export class ViewcourseComponent implements OnInit {
    id=''
    cardSet: any[] = []; // Array to hold individual cards
    review:any[]=[]
    cards:any[]=[]


  constructor(private route:Router,private mainserve:MainService){}

  ngOnInit(): void {
     this.id=localStorage.getItem('loginId')||'' 
     this.loadCourses()
     
  }


  loadCourses(): void {
    this.mainserve.viewcoursebyid(this.id).subscribe(
      (res: any) => {
        this.cardSet = res; // Assign the fetched data to cardSet
  
        // Load reviews for each course
        this.cardSet.forEach((course) => {
          this.loadReviewsForCourse(course._id);
        });
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  loadReviewsForCourse(courseId: string): void {
    this.mainserve.viewreviewbyid(courseId).subscribe(
      (res: any) => {
        const course = this.cardSet.find((c:any) => c._id === courseId);
        if (course) {
          course.reviews = res; // Attach reviews to the course
          // Calculate the average rating
          const totalRating = res.reduce((sum: number, review: any) => sum + review.rating, 0);
          course.rating = res.length > 0 ? totalRating / res.length : 0; 
        }
      },
      (error) => {
        console.error(`Error fetching reviews for course ${courseId}:`, error);
      }
    );
  }




  // getStarArray(rating: number): boolean[] {
  //   return Array(5) 
  //     .fill(false)
  //     .map((_, index) => index < Math.floor(rating));
  // }

  getStarArray(rating: number): boolean[] {
    return Array(5)
      .fill(false)
      .map((_, index) => index < Math.floor(rating));
  }

  
  gotoselected(){
    this.route.navigate(['/teacher/selected'])

  }
}
