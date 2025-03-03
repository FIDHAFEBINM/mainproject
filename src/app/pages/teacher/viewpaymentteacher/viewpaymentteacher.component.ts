import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewpaymentteacher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewpaymentteacher.component.html',
  styleUrl: './viewpaymentteacher.component.css'
})
export class ViewpaymentteacherComponent {
  paymentData= [
    {
      userName: 'John Doe',
      courseName: 'Angular Development',
      amountPaid: 299,
      paymentDate: '2025-03-01'
    },
    {
      userName: 'Jane Doe',
      courseName: 'Python for Beginners',
      amountPaid: 199,
      paymentDate: '2025-02-25'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

}
