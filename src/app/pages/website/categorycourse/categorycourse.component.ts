import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../../service/main.service';



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
    // cards = [
    //   {
    //     name: 'John Doe',
    //     title: 'Architect and Engineer',
    //     description: 'Some example text some example text. John Doe is an architect and engineer.',
    //     imageUrl: '/image/doc.jpg',
    //     profileLink: '#'
    //   } ];
    cards:any[]=[]
    filteredCards:any[]=[]
    id=''


    searchQuery: string = '';

  
    constructor(private router:Router,private route:ActivatedRoute,private mains:MainService){}


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const categoryId = params['category'];
      this.searchQuery=params['search'] || ''; // Get the search query from the URL
      if (!this.searchQuery) {
        this.filteredCards = []; // Show no courses if no search query
      }
      if (categoryId) {
        this.loadCoursesByCategory(categoryId); // Load courses for the selected category
      } else {
        this.loadcourse(); // Load all courses if no category is selected
      }
    });

    this.id = localStorage.getItem('loginId') || '';
  }

  
    get paginatedCards() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredCards.slice(startIndex, endIndex);
    }
  
    get totalPages(): number {
      return Math.ceil(this.filteredCards.length / this.itemsPerPage);
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
  
    goToSelected(id:string){
      this.router.navigate(['/selectedcourse',id])
    }


    getFullStars(rating: number): number[] {
      if (isNaN(rating) || rating < 0) {
        return []; // Return an empty array if the rating is invalid
      }
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

    loadcourse(){
      this.mains.viewCourse().subscribe(
        (res: any) => {
          this.cards = res;
          this.filteredCards = res; // Initialize filteredCards with all courses
          this.cards.forEach((course) => {
            this.loadReviewsForCourse(course._id);
          });
          if (this.searchQuery) {
            this.filterCourses();
          } // Apply the filter based on the search query
        },
        (err) => {
          console.error('Error loading courses:', err);
        }
      );
    }

    loadCoursesByCategory(categoryId: string) {
      this.mains.viewcoursebycategoryid(categoryId).subscribe(
        (res: any) => {
          this.cards = res; // Populate courses for the selected category
          this.filteredCards = res; // Initialize filteredCards with category courses
          this.cards.forEach((course) => {
            this.loadReviewsForCourse(course._id); // Load reviews and calculate ratings for each course
          });
          if (this.searchQuery) {
            this.filterCourses();
          } // Apply the filter based on the search query
        },
        (err) => {
          console.error('Error loading courses by category:', err);
        }
      );
    }

    loadReviewsForCourse(courseId: string): void {
      this.mains.viewreviewbyid(courseId).subscribe(
        (res: any) => {
          const course = this.cards.find((c) => c._id === courseId);
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
      
    goToCart(card:any){
      const cart={
        'course':card,
        'user':this.id }
      this.mains.addcart(cart).subscribe((res:any)=>{ 
        alert("added succesfully")
      },
      (error: any) => {
        if (error.status === 400 && error.error.message === 'Course is already in the cart') {
          alert("Course is already in the cart");
        } else {
          console.error("Failed to add course to cart:", error);
          alert("An error occurred while adding the course to the cart");
        }
      }
    )
    }
    
    filterCourses() {
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase().trim();
        this.filteredCards = this.cards.filter((course) =>
          course.topic.toLowerCase().includes(query) ||
          course.subcategory.category.categoryName.toLowerCase().includes(query) ||
          course.subcategory.subcategory.toLowerCase().includes(query)
        );
      } else {
        this.filteredCards = [...this.cards];  // Show all courses if no search query
      }
    }
    

    
}
