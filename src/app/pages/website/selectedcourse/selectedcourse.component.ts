import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayreviewComponent } from "../../../displayreview/displayreview.component";
import { ReviewComponent } from "../../../review/review.component";
import { MainService } from '../../../service/main.service';
import { Course } from '../../../models/corse';
import { ViewquestionpaperComponent } from "../viewquestionpaper/viewquestionpaper.component";
import { AssignmentanswerComponent } from "../assignmentanswer/assignmentanswer.component";

@Component({
  selector: 'app-selectedcourse',
  standalone: true,
  imports: [CommonModule, DisplayreviewComponent, ReviewComponent, ViewquestionpaperComponent, AssignmentanswerComponent],
  templateUrl: './selectedcourse.component.html',
  styleUrl: './selectedcourse.component.css'
})
export class SelectedcourseComponent implements OnInit {
  questionPaperAvailable: { [key: string]: boolean } = {};
  hasQuestionsMap: { [key: string]: boolean } = {};

  courseId: string | null = null;
  itemsToShow = 10;
  initialItemsToShow = 10;
  rating = 4.3;
  user = { isTeacher: true };
  selectedcourse: any = [];
  reviews: any[] = [];
  averageRating = 0;
  totalReviews = 0;
  id = '';
  courses: any[] = [];
  lessons: any[] = [];
  file = 'pdf/Document PDF (1).pdf';
  questionPaperToggle: { [key: string]: boolean } = {}; // Track toggle state for each section
  hasAssignmentMap: { [key: string]: boolean } = {}; // Map to track if a section has an assignment
  assignmentTitles: { [key: string]: string } = {}; // Map to store assignment titles for each section
  isPurchased: boolean = false; // Flag to check if the course is purchased
  purchasedCourses: string[] = []; // List of purchased course IDs



  constructor(
    private router: Router,
    private mainserve: MainService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = localStorage.getItem('loginId') || '';
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.checkIfPurchased()
    this.loadPurchasedCourses();
    if (this.courseId) {
      this.loadCourseDetails();
      this.loadreview();
      this.loadselectedcourse();
      // this.loadAssignmentsForSections();

    } else {
      console.error('Course ID is null or undefined.');
    }
  }

  get displayedCourses() {
    return this.courses.slice(0, this.itemsToShow);
  }

  

  loadMore() {
    this.itemsToShow += 10;
  }

  showLess() {
    this.itemsToShow = this.initialItemsToShow;
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

  buyNow() {
    // Add functionality as needed
  }

  toggleQuestionPaper(sectionId: string): void {
    this.questionPaperToggle[sectionId] = !this.questionPaperToggle[sectionId]; // Toggle the state
  }

  onQuestionsLoaded(sectionId: string, hasQuestions: boolean): void {
    this.questionPaperAvailable[sectionId] = hasQuestions;
  }

  checkIfPurchased(): void {
    const userId = localStorage.getItem('loginId'); // Get user ID from localStorage
    if (userId) {
      this.mainserve.getcoursebyuserid(userId).subscribe((purchasedCourses: any) => {
        this.isPurchased = purchasedCourses.some(
          (course: any) => course.courseId._id === this.courseId
        );
        console.log('Is Purchased:', this.isPurchased); // Debug log
      });
    }
  }


  loadPurchasedCourses(): void {
    const userId = localStorage.getItem('loginId'); // Get user ID from localStorage
    if (userId) {
      this.mainserve.getcoursebyuserid(userId).subscribe(
        (purchasedCourses: any) => {
          this.purchasedCourses = purchasedCourses.map((course: any) => course.courseId._id); // Extract course IDs
          console.log('Purchased Courses:', this.purchasedCourses); // Debug log
          this.isPurchased = this.courseId !== null && this.purchasedCourses.includes(this.courseId); // Check if the current course is purchased
        },
        (error: any) => {
          console.error('Error fetching purchased courses:', error); // Debug log
        }
      );
    }
  }

 isCoursePurchased(courseId: string): boolean {
  const isPurchased = this.purchasedCourses.includes(courseId);
  console.log(`Is Course Purchased (${courseId}):`, isPurchased); // Debug log
  return isPurchased;
}



  loadAssignmentsForSections(): void {
    this.displayedCourses.forEach((course) => { 
      this.mainserve.viewAssignment(course._id).subscribe(
        (res: any) => {
          if (res && res.assignments && res.assignments.length > 0) {
            this.hasAssignmentMap[course._id] = true;
            this.assignmentTitles[course._id] = res.assignments[0].title || 'View Assignment';
          } else {
            this.hasAssignmentMap[course._id] = false;
          }
        },
        (error) => {
          console.error(`Failed to fetch assignments for section ${course._id}:`, error);
          this.hasAssignmentMap[course._id] = false;
        }
      );
    });
  }
  addToCart() {
    const cart = {
      course: this.courseId,
      user: this.id
    };
    this.mainserve.addcart(cart).subscribe(
      (res: any) => {
        alert("Added successfully");
      },
      (error: any) => {
        if (error.status === 400 && error.error.message === 'Course is already in the cart') {
          alert("Course is already in the cart");
        } else {
          console.error("Failed to add course to cart:", error);
          alert("An error occurred while adding the course to the cart");
        }
      }
    );
  }

  loadCourseDetails() {
    this.mainserve.viewcourseid(this.courseId).subscribe(
      (res: any) => {
        this.selectedcourse = res;
      },
      (error) => {
        console.error('Error fetching course details:', error);
      }
    );
  }

  // loadselectedcourse() {
  //   this.mainserve.sectionbycourseid(this.courseId).subscribe((res: any) => {
  //     this.courses = res;
  //   });
  // }


  loadselectedcourse() {
    this.mainserve.sectionbycourseid(this.courseId).subscribe((res: any) => {
      this.courses = res;
  
      // Check each section if it has questions
      this.courses.forEach((section: any) => {
        this.mainserve.viewmcq(section._id).subscribe((questions: any) => {
          this.hasQuestionsMap[section._id] = questions && questions.length > 0;
        }, error => {
          this.hasQuestionsMap[section._id] = false;
        });
      });

      this.courses.forEach((section: any) => {
        this.mainserve.viewAssignment(section._id).subscribe(
          (assignment: any) => {
            if (assignment && assignment.assignments && assignment.assignments.length > 0) {
              this.hasAssignmentMap[section._id] = true;
              this.assignmentTitles[section._id] = assignment.assignments[0].title || 'View Assignment';
            } else {
              this.hasAssignmentMap[section._id] = false;
            }
          },
          (error) => {
            console.error(`Failed to fetch assignments for section ${section._id}:`, error);
            this.hasAssignmentMap[section._id] = false;
          }
        );
      });
    });
  }
  assignmentToggle: { [key: string]: boolean } = {}; // Track toggle state for each section

  // Other properties and methods...

  toggleAssignment(sectionId: string): void { 
    this.assignmentToggle[sectionId] = !this.assignmentToggle[sectionId]; // Toggle the state
  }
 
  loadsectionbysectionid(sectionId: string) {
    this.mainserve.sectionbysectionId(sectionId).subscribe(
      (res: any) => {
        if (res && res.content) {
          this.lessons = [
            ...(res.content.video ? [{ type: 'video', ...res.content.video }] : []),
            ...(res.content.pdf ? [{ type: 'pdf', ...res.content.pdf }] : [])
          ];
        } else {
          this.lessons = [];
        }
      },
      (error) => {
        console.error('Error fetching lessons:', error);
        this.lessons = [];
      }
    );
  }

  handleLessonClick(lesson: { type: string, file?: string }) {
    if (lesson.type === 'video' && lesson.file) {
      window.open('http://localhost:3000/uploads/' + lesson.file, '_blank');
    } else if (lesson.type === 'pdf' && lesson.file) {
      window.open('http://localhost:3000/uploads/' + lesson.file, '_blank');
    }
  }
  

  toVideo(sectionId:string) {
    this.router.navigate(['video',sectionId]);
  }

  topdf(pdfFile: string) {
    if (pdfFile) {
      window.open('http://localhost:3000' + pdfFile, '_blank'); // Open the PDF in a new tab
    } else {
      console.warn('No PDF file available.');
    }
  }

  toquestionpaper() {
    this.router.navigate(['viewquestion']);
  } 

  toassignment() {
    this.router.navigate(['assignmentupdate']);
  }

  openPdf() {
    window.open(this.file, '_blank');
  }

  loadreview() {
    this.mainserve.viewreviewbyid(this.courseId).subscribe((res: any) => {
      this.reviews = res;
      this.totalReviews = res.length;
      if (this.totalReviews > 0) {
        const totalRating = res.reduce((sum: number, review: any) => sum + review.rating, 0);
        this.averageRating = totalRating / this.totalReviews;
      } else {
        this.averageRating = 0;
      }
    });
  }


}
