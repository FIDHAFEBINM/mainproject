import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainService } from '../../../service/main.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

  // teacherId = ''; // Replace with actual logged-in teacher ID
  // selectedYear = new Date().getFullYear();
  // years: number[] = [];

  // report: any[] = [];
  // loading = false;

  // constructor(private reportService: MainService) {}

  // ngOnInit(): void {
  //   this.teacherId = localStorage.getItem('loginId') || ''; // Get the teacher ID from local storage or any other source
  //   const currentYear = new Date().getFullYear();
  //   this.years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  //   this.fetchReport();
  // }

  // fetchReport(): void {
  //   this.loading = true;
  //   this.reportService.viewmonthlyreport(this.teacherId, this.selectedYear).subscribe({
  //     next: (data:any) => {
  //       this.report = data;
  //       this.loading = false;
  //     },
  //     error: (err: any) => {
  //       console.error(err);
  //       this.loading = false;
  //     }
  //   });
  // }


  teacherId = ''; // Replace dynamically if needed
  selectedYear = new Date().getFullYear();
  years: number[] = [];
  report: any[] = [];
  loading = false;

  constructor(private reportService: MainService) {}

  ngOnInit(): void {
    this.teacherId = localStorage.getItem('loginId') || ''; // Get the teacher ID from local storage or any other source
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 5 }, (_, i) => currentYear - i);
    this.fetchReport();
  }

  fetchReport(): void {
    this.loading = true;
    this.reportService.viewmonthlyreport(this.teacherId, this.selectedYear).subscribe({
      next: (data:any) => {
        this.report = data;
        this.loading = false;
      },
      error: (err:any) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  getMonthName(monthNumber: number): string {
    return new Date(0, monthNumber - 1).toLocaleString('default', { month: 'long' });
  }
}
