import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewteachercourseadmin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewteachercourseadmin.component.html',
  styleUrl: './viewteachercourseadmin.component.css'
})
export class ViewteachercourseadminComponent {
  courses = [
    {
      id: 1,
      name: "Angular Fundamentals",
      teacher: "John Doe",
      rating: 4.8,
      reviews: ["Great course!", "Very detailed."],
      videos: ["video1.mp4", "video2.mp4"]
    },
    {
      id: 2,
      name: "Bootstrap 5 Basics",
      teacher: "Jane Smith",
      rating: 4.5,
      reviews: ["Helpful for beginners"],
      videos: ["video3.mp4"]
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  viewReviews(course: any) {
    alert(`Reviews for ${course.name}:\n${course.reviews.join("\n")}`);
  }

  viewVideos(course: any) {
    alert(`Videos for ${course.name}:\n${course.videos.join("\n")}`);
  }

  approveCourse(courseId: number) {
    alert(`Course with ID ${courseId} has been approved!`);
  }

  deleteCourse(courseId: number) {
    if (confirm("Are you sure you want to delete this course?")) {
      this.courses = this.courses.filter(course => course.id !== courseId);
    }
  }
}
