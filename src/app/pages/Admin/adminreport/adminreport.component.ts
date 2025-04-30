import { Component } from '@angular/core';
import { MainService } from '../../../service/main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminreport',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './adminreport.component.html',
  styleUrl: './adminreport.component.css'
})
export class AdminreportComponent {
  selectedYear = new Date().getFullYear();
  years: number[] = [];
  report: any[] = [];
  loading = false;

  constructor(private reportService: MainService) {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 5 }, (_, i) => currentYear - i);
    this.fetchReport();
  }

  fetchReport(): void {
    this.loading = true;
    this.reportService.getAdminMonthlyReport(this.selectedYear).subscribe({
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
