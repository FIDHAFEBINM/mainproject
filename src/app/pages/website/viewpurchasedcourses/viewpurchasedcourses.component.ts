import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-viewpurchasedcourses',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './viewpurchasedcourses.component.html',
  styleUrl: './viewpurchasedcourses.component.css'
})
export class ViewpurchasedcoursesComponent {
  currentPage: number = 1;
  itemsPerPage: number = 10;
  rating: number = 4.3;
  cards: any[] = [];
  filteredCards: any[] = [];
  id = '';
  searchQuery: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mains: MainService
  ) {}

  ngOnInit() {
    this.id = localStorage.getItem('loginId') || '';
    if (this.id) {
      this.loadPurchasedCourses();
    }
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

  goToSelected(id: string) {
    this.router.navigate(['/selectedcourse', id]);
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

  loadPurchasedCourses() {
    this.mains.getpurchasedbyuserid(this.id).subscribe(
      (res: any) => {
        this.cards = res;
        this.filteredCards = res;
        this.cards.forEach((purchase) => {
          if (purchase.courseId._id) {
            this.loadReviewsForCourse(purchase.courseId._id);
          }
        });
      },
      (err) => {
        console.error('Error loading purchased courses:', err);
      }
    );
  }

  loadReviewsForCourse(courseId: string): void {
    this.mains.viewreviewbyid(courseId).subscribe(
      (res: any) => {
        const courseEntry = this.cards.find((entry) => entry.courseId._id === courseId);
        if (courseEntry && courseEntry.course) {
          const totalRating = res.reduce((sum: number, review: any) => sum + review.rating, 0);
          courseEntry.course.rating = res.length > 0 ? totalRating / res.length : 0;
        }
      },
      (error) => {
        console.error(`Error fetching reviews for course ${courseId}:`, error);
      }
    );
  }
      
  
}
 