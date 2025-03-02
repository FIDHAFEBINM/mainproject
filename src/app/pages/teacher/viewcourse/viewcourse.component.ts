import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-viewcourse',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './viewcourse.component.html',
  styleUrl: './viewcourse.component.css'
})
export class ViewcourseComponent {
    card1=[
    { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120  },
    { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 ,rating: 4.5, learners: 120 },
    { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120  },
    { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120  },
    { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 ,rating: 4.5, learners: 120 },
    { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120 },
    { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120  },
  ]

  constructor(private route:Router){}


  getStarArray(rating: number): boolean[] {
    return Array(5)
      .fill(false)
      .map((_, index) => index < Math.floor(rating));
  }

  
  gotoselected(){
    this.route.navigate(['/teacher/selected'])

  }
}
