import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teachermonthlyreport',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './teachermonthlyreport.component.html',
  styleUrl: './teachermonthlyreport.component.css'
})
export class TeachermonthlyreportComponent {
  selectedMonth: string = 'January';

  reportData: Record<string, { students: number; reviews: number; rating: number; payments: number }> = {
    January: { students: 80, reviews: 60, rating: 90, payments: 70 },
    February: { students: 75, reviews: 50, rating: 85, payments: 65 },
    March: { students: 95, reviews: 80, rating: 92, payments: 78 },
    April: { students: 65, reviews: 45, rating: 80, payments: 55 }
  };

  get months(): string[] {
    return Object.keys(this.reportData);
  }

  get currentData() {
    return this.reportData[this.selectedMonth];
  }

  getStrokeDasharray(value: number): string {
    const radius = 45; // Circle radius
    const circumference = 2 * Math.PI * radius;
    const progress = (value / 100) * circumference;
    return `${progress} ${circumference}`;
  }
}
