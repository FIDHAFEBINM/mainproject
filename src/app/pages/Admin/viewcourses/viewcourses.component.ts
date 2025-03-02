import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcourses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewcourses.component.html',
  styleUrl: './viewcourses.component.css'
})
export class ViewcoursesComponent {
  teacherCourses = [
    {
      title: 'Angular Basics',
      description: 'Learn the basics of Angular framework.',
      duration: '6 Weeks',
      rating: 4,
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Advanced JavaScript',
      description: 'Deep dive into modern JavaScript.',
      duration: '8 Weeks',
      rating: 5,
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Bootstrap & UI Design',
      description: 'Enhance UI with Bootstrap 5.',
      duration: '4 Weeks',
      rating: 3,
      image: 'https://via.placeholder.com/150'
    }
  ];

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }
}
