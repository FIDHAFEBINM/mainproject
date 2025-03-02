import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  // courses = [
  //   {
  //     title: 'Web Development',
  //     learners: 120,
  //     rating: 4, // Rating out of 5
  //     reviews: 250,
  //     cashGenerated: 5400
  //   },
  //   {
  //     title: 'JavaScript Basics',
  //     learners: 200,
  //     rating: 5,
  //     reviews: 400,
  //     cashGenerated: 8200
  //   },
  //   {
  //     title: 'Python for Beginners',
  //     learners: 150,
  //     rating: 3, // Rating out of 5
  //     reviews: 300,
  //     cashGenerated: 7500
  //   }
  // ];


  courses = [
    {
      title: 'Angular Basics',
      months: [
        { month: 'January', learners: 120, rating: 4, reviews: 85, cashGenerated: 50000 },
        { month: 'February', learners: 130, rating: 5, reviews: 95, cashGenerated: 55000 },
        { month: 'March', learners: 140, rating: 4, reviews: 110, cashGenerated: 60000 }
      ]
    },
    {
      title: 'React Fundamentals',
      months: [
        { month: 'January', learners: 100, rating: 3, reviews: 60, cashGenerated: 40000 },
        { month: 'February', learners: 105, rating: 4, reviews: 70, cashGenerated: 42000 },
        { month: 'March', learners: 115, rating: 4, reviews: 80, cashGenerated: 46000 }
      ]
    }
  ];
}
