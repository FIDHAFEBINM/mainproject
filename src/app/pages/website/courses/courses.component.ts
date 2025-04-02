import { CommonModule } from '@angular/common';
import { Component,Input ,SimpleChanges,OnChanges,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import bootstrap from '../../../../main.server';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  // @Input() cards: { title: string; description: string;image:string ;rating: number, learners:number }[] = []; 
  cards:any[]=[]
    // { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
    // { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
    // { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
    // { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
    // { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
    // { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450},
    // { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },

  groupedCards: any[] = [];
  cardSet: any[] = []; // Array to hold individual cards
  review:any[]=[]



  constructor(private router:Router,private mainserve:MainService) {
    // this.groupCards(5); // Group into sets of 3 cards per slide
    // this.cards=this.card1
  }

  ngOnInit(): void {
      this.loadCourses()
  }

  groupCards(cards: any[], size: number): any[] {
    const grouped = [];
    for (let i = 0; i < cards.length; i += size) {
      grouped.push(cards.slice(i, i + size));
    }
    return grouped;
  }

  loadCourses(): void {
    this.mainserve.viewCourse().subscribe(
      (res: any) => {
        this.cardSet = res; // Assign the fetched data to cardSet
        this.groupedCards = this.groupCards(this.cardSet, 4); // Group cards into sets of 4
  
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
        const course = this.cardSet.find((c) => c._id === courseId);
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

  ongo(){
    this.router.navigate(['/allcourse'])
  }
  goToSelected(id:string){
    this.router.navigate(['/selectedcourse',id])
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['cards']) {
  //     this.groupCards(5);  // Re-group when input changes
  //   }
  // }
  getStarArray(rating: number): boolean[] {
    return Array(5)
      .fill(false)
      .map((_, index) => index < Math.floor(rating));
  }


}
