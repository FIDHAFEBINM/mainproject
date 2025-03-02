import { CommonModule } from '@angular/common';
import { Component,Input ,SimpleChanges,OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import bootstrap from '../../../../main.server';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  @Input() cards: { title: string; description: string;image:string ;rating: number, learners:number }[] = []; 
  // card1=[
  //   { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
  //   { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
  //   { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
  //   { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
  //   { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
  //   { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450},
  //   { title: 'Course 1', description: 'Learn HTML & CSS', image: '/image/doc.jpg',price:450 },
  // ]
  groupedCards: any[] = [];


  constructor(private router:Router) {
    this.groupCards(5); // Group into sets of 3 cards per slide
    // this.cards=this.card1
  }

  groupCards(size: number) {
    for (let i = 0; i < this.cards.length; i += size) {
      this.groupedCards.push(this.cards.slice(i, i + size));
    }
  }

  ongo(){
    this.router.navigate(['/allcourse'])
  }
  goToSelected(){
    this.router.navigate(['/selectedcourse'])
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cards']) {
      this.groupCards(5);  // Re-group when input changes
    }
  }
  getStarArray(rating: number): boolean[] {
    return Array(5)
      .fill(false)
      .map((_, index) => index < Math.floor(rating));
  }


}
