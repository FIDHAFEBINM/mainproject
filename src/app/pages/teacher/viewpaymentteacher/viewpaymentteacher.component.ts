import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-viewpaymentteacher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewpaymentteacher.component.html',
  styleUrl: './viewpaymentteacher.component.css'
})
export class ViewpaymentteacherComponent {
  paymentData:any= [ ];
  teacherId:string=''
  amountpaid='Amount Paid'

  constructor(private mainserve:MainService) {}

  ngOnInit(): void {
    this.teacherId = localStorage.getItem('loginId') || ''; // Get teacher ID from localStorage
    this.loadPaymentDetails()
  }

  loadPaymentDetails(): void {
    if (this.teacherId) {
      this.mainserve.getpurchasesbyteacherid(this.teacherId).subscribe(
        (data: any) => {
          this.paymentData = data; // Store payment details
          console.log('Payment Data:', this.paymentData); // Debug log
        },
        (error: any) => {
          console.error('Error fetching payment details:', error);
        }
      );
    } else {
      console.error('Teacher ID is missing.');
    }
  }

}
