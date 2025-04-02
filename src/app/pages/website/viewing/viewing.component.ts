import { CommonModule } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursesComponent } from "../courses/courses.component";
import { DisplayreviewfirstComponent } from "../../displayreviewfirst/displayreviewfirst.component";

@Component({
  selector: 'app-viewing',
  standalone: true,
  imports: [CommonModule, RouterLink, CoursesComponent, DisplayreviewfirstComponent],
  templateUrl: './viewing.component.html',
  styleUrl: './viewing.component.css'
})
export class ViewingComponent implements OnInit {

  id:string=''
  ngOnInit(): void {
    this.id = localStorage.getItem('loginId') || '';
    console.log(this.id)

  }
  courseCategories = [
    { name: 'Design' },
    { name: 'Data Science' },
    { name: 'Business' },
    { name: 'Health Science' }
  ];

    card1= [
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120  },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120  },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120  },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120  },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120  },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120 },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450,rating: 4.5, learners: 120  },
  
  
    ]

    card2= [
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:689,rating: 4.5, learners: 120  },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:680,rating: 4.5, learners: 120  },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:680,rating: 4.5, learners: 120  },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:680,rating: 4.5, learners: 120  },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:680,rating: 4.5, learners: 120  },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:680,rating: 4.5, learners: 120 },
      { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:680,rating: 4.5, learners: 120  },
  
  
    ]

    plans = [
      {
        name: "Basic",
        price: 9.99,
        features: ["Feature 1", "Feature 2", "Feature 3"],
        recommended: false
      },
      {
        name: "Pro",
        price: 19.99,
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        recommended: true
      },
      {
        name: "Enterprise",
        price:49.99,
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
        recommended: false
      }
    ];
    

}
