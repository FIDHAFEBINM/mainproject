import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayreviewComponent } from "../../../displayreview/displayreview.component";
import { ReviewComponent } from "../../../review/review.component";
import { MainService } from '../../../service/main.service';
import { Course } from '../../../models/corse';

@Component({
  selector: 'app-selectedcourse',
  standalone: true,
  imports: [CommonModule, DisplayreviewComponent, ReviewComponent],
  templateUrl: './selectedcourse.component.html',
  styleUrl: './selectedcourse.component.css'
})
export class SelectedcourseComponent implements OnInit {
  courseId: string | null=null
  itemsToShow: number = 10;
  initialItemsToShow: number = 10;
  price=300
  Lorem="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32 The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where can I get some?There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  rating: number = 4.3;
  totalRatings: number = 1742;
  learners: number = 122216;
  reviewCount = 25;
  user = { isTeacher: true };
  selectedcourse: any = [];  // Or use Course model if applicable

  // Stars array for visual representation
  starsArray: string[] = [];
  reviews: any[] = [];
  averageRating: number = 0;
  totalReviews: number = 0;
  teacher:any=[]
 

  teacherreviews:any[]=[]
  id=''


  courses:any = [];

  lessons = [
    {
      title: "Welcome To The Course!",
      type: 'video',
      duration: "01:07",
    },


  ];
  

  constructor(private router:Router,private mainserve:MainService,private route:ActivatedRoute){}

  ngOnInit() {
    this.id = localStorage.getItem('loginId') || '';
    this.courseId = this.route.snapshot.paramMap.get('id');
    console.log('Selected Course ID:', this.courseId);
  
    if (this.courseId) {
      this.loadCourseDetails();
      this.loadreview();
      this.loadselectedcourse()
      // this.loadreviewbyteacher();
      // this.loadteacherdescription();
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
  }

  loadCourseDetails() {
    this.mainserve.viewcourseid(this.courseId).subscribe(
      (res: any) => {
        if (res) {
          this.selectedcourse = res;
          console.log('Course Details:', this.selectedcourse);
  
          // Ensure the teacher ID is available for further calls
          if (!this.selectedcourse.teacher) {
            console.warn('Teacher ID is missing in the course details.');
          }
        } else {
          console.warn('No course data found.');
        }
      },
      (error) => {
        console.error('Error fetching course details:', error);
      }
    );
  }

  loadselectedcourse() {
    this.mainserve.sectionbycourseid(this.courseId).subscribe((res:any)=>{
      this.courses=res
      console.log('Course Details:', this.courses);
    })
  }


  // loadteacherdescription() {
  //   if (this.selectedcourse.teacher) {
  //     this.mainserve.viewtaecherdescription(this.selectedcourse.teacher).subscribe(
  //       (res: any) => {
  //         this.teacher = res;
  //         console.log('Teacher Details:', this.teacher);
  //       },
  //       (error) => {
  //         console.error('Error fetching teacher details:', error);
  //       }
  //     );
  //   } else {
  //     console.warn('No teacher ID found in the selected course.');
  //   }
  // }

  addToCart() {
    
    const cart={
      'course':this.courseId,
      'user':this.id }
    this.mainserve.addcart(cart).subscribe((res:any)=>{
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

  toVideo(){
    this.router.navigate(['video'])
  }
  topdf(){
    this.router.navigate(['pdfview'])
  }
  toquestionpaper(){
    this.router.navigate(['viewquestion'])
  }
  toassignment(){
    this.router.navigate(['assignmentupdate'])
  }
  updateStars() {
    this.starsArray = [];
    for (let i = 1; i <= 5; i++) {
      this.starsArray.push(i <= this.rating ? 'text-warning' : 'text-muted');
    }
  }

  // Handle rating click
  rate(newRating: number) {
    this.rating = newRating;
    this.updateStars();
  }

  handleLessonClick(lesson: { type: string }) {
    if (lesson.type === 'video') {
      this.toVideo();
    } else if (lesson.type === 'pdf') {
      this.openPdf();
    }
    else if(lesson.type === 'quetsion'){
      this.toquestionpaper();
    }
    else if(lesson.type === 'assignment'){
      this.toassignment();
    }
  }

  file = 'pdf/Document PDF (1).pdf'

  openPdf() {
    window.open(this.file, '_blank'); // Opens PDF in a new tab
  }




  loadreview(){
    this.mainserve.viewreviewbyid(this.courseId).subscribe((res:any)=>{

   
    this.reviews = res;
    this.totalReviews = this.reviews.length;

    if (this.totalReviews > 0) {
      const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
      this.averageRating = totalRating / this.totalReviews;
    } else {
      this.averageRating = 0;
    }

    console.log('Reviews:', this.reviews);
    console.log(`Average Rating: ${this.averageRating}, Total Reviews: ${this.totalReviews}`);
  })}

  teachertotalreview:number=0
  averageteacherrating:number=0

  // loadreviewbyteacher() {
  //   if (this.selectedcourse.teacher) {
  //     this.mainserve.viewreviewbyteacherid(this.selectedcourse.teacher).subscribe(
  //       (res: any) => {
  //         this.teacherreviews = res;
  //         this.teachertotalreview = this.teacherreviews.length;
  
  //         if (this.teachertotalreview > 0) {
  //           const totalRating = this.teacherreviews.reduce((sum, review) => sum + review.rating, 0);
  //           this.averageteacherrating = totalRating / this.teachertotalreview;
  //         } else {
  //           this.averageteacherrating = 0;
  //         }
  
  //         console.log('Teacher Reviews:', this.teacherreviews);
  //         console.log(`Teacher Average Rating: ${this.averageteacherrating}, Total Reviews: ${this.teachertotalreview}`);
  //       },
  //       (error) => {
  //         console.error('Error fetching teacher reviews:', error);
  //       }
  //     );
  //   } else {
  //     console.warn('No teacher ID found in the selected course.');
  //   }
  // }

  


}

  

