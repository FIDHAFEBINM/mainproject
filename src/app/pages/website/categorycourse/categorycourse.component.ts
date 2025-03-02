import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-categorycourse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorycourse.component.html',
  styleUrl: './categorycourse.component.css'
})
export class CategorycourseComponent {
  currentPage: number = 1;
    itemsPerPage: number = 10;
    rating: number = 4.3;
  hide:boolean=true
    cards = [
      {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },
      {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },   {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },
      {
        name: 'John Doe',
        title: 'Architect and Engineer',
        description: 'Some example text some example text. John Doe is an architect and engineer.',
        imageUrl: '/image/doc.jpg',
        profileLink: '#'
      },
      
    ];

    searchQuery: string = '';

  
    constructor(private router:Router,private route:ActivatedRoute){}


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
      if (this.searchQuery) {
        this.filterCourses(this.searchQuery);
      }
    });
  }

  filterCourses(query: string) {
    console.log('Filtering courses with:', query.toLowerCase());
    // Implement logic to filter the courses based on searchQuery
  }
  
    get paginatedCards() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.cards.slice(startIndex, endIndex);
    }
  
    get totalPages(): number {
      return Math.ceil(this.cards.length / this.itemsPerPage);
    }
  
    setPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  
    goToSelected(){
      this.router.navigate(['/selectedcourse'])
    }
    
    goToCart(){

    }

    getFullStars(rating: number): number[] {
      return Array(Math.floor(rating)).fill(0);
    }
  
    hasHalfStar(rating: number): boolean {
      return rating % 1 !== 0;
    }
  
    getEmptyStars(rating: number): number[] {
      return Array(5 - Math.ceil(rating)).fill(0);
    }
    filter(){
      this.hide=!this.hide
    }
  
}
