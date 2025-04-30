import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-viewcourses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewcourses.component.html',
  styleUrl: './viewcourses.component.css'
})
export class ViewcoursesComponent implements OnInit {

  teacherId: string = '';
  teacherCourses:any = [ ];

  constructor(private route: ActivatedRoute, private mainService: MainService) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teacherId = params['id']; // Get the teacher ID from the route parameters
    });
    this.loadCoursesByTeacher();
    
  }

  loadCoursesByTeacher(): void {
    this.mainService.viewcoursebyid(this.teacherId).subscribe(
      (res: any) => {
        this.teacherCourses = res; // Store the courses
      },
      (error: any) => {
        console.error('Error fetching courses:', error);
        alert('Failed to load courses.');
      }
    );
  }

  loadReviewsForCourse(courseId: string): void {
    this.mainService.viewreviewbyid(courseId).subscribe(
      (res: any) => {
        const course = this.teacherCourses.find((c:any) => c._id === courseId);
        if (course) {
          course.reviews = res; // Attach reviews to the course

          // Calculate the average rating
          const totalRating = res.reduce((sum: number, review: any) => sum + review.rating, 0);
          course.averageRating = res.length > 0 ? totalRating / res.length : 0; // Average rating
        }
      },
      (error) => {
        console.error(`Error fetching reviews for course ${courseId}:`, error);
      }
    );
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }
}
