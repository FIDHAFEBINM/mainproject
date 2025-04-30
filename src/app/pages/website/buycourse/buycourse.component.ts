import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { MainService } from '../../../service/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buycourse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buycourse.component.html',
  styleUrl: './buycourse.component.css'
})
export class BuycourseComponent implements OnInit {
  userId = ''; // example user ID
  courseId = ''; // example course ID
  message = '';
  paymentDate: Date | null = null;
  coursePrice:any=[]; // Assuming the price is a number
  totalprice:any=0;
  isPurchased: boolean = false; // Flag to track purchase status
  

  constructor(private purchaseService: MainService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.userId = localStorage.getItem('loginId') || '';
    this.route.params.subscribe(params => {
      this.courseId = params['courseId'];
      console.log('Course ID:', this.courseId); // Debug log
      this.checkPurchaseStatus()
    }); 
    this.getCourseDetails()
  }

  getCourseDetails(): void {
    this.purchaseService.viewcourseid(this.courseId).subscribe(
      (res: any) => {
        this.coursePrice = res; // Assuming the backend returns a `price` field
        console.log('Course Price:', this.coursePrice); // Debug log
      },
      error => {
        console.error('Error fetching course details:', error);
      }
    );
  }

  checkPurchaseStatus(): void {
    this.purchaseService.checkifpurchased(this.userId, this.courseId).subscribe(
      (res: any) => {
        this.isPurchased = res; // Update the flag based on the response
        console.log('Is Purchased:', this.isPurchased); // Debug log
      },
      error => {
        console.error('Error checking purchase status:', error);
      }
    );
  }

  buyCourse(): void {
    this.purchaseService.buyCourse(this.userId, this.courseId).subscribe(
      (res: any) => {
        this.message = res.message;
        this.paymentDate = res.paymentDate;
        this.totalprice = res.totalPrice; // Assuming the backend returns a `price` field
        this.isPurchased = true; 

      },
      error => {
        this.message = 'Purchase failed!';
        console.error(error);
      }
    );
  }
}
