import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adminreports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminreports.component.html',
  styleUrl: './adminreports.component.css'
})
export class AdminreportsComponent {
  years = [2023, 2024, 2025];
  selectedYear = 2024;

  months = [
    { name: 'January', teachers: 50, students: 150, totalUsers: 200, metrics: this.generateMetrics() },
    { name: 'February', teachers: 40, students: 120, totalUsers: 160, metrics: this.generateMetrics() },
    { name: 'March', teachers: 60, students: 180, totalUsers: 240, metrics: this.generateMetrics() },
    { name: 'April', teachers: 70, students: 200, totalUsers: 270, metrics: this.generateMetrics() },
    { name: 'May', teachers: 80, students: 250, totalUsers: 330, metrics: this.generateMetrics() },
    { name: 'June', teachers: 90, students: 300, totalUsers: 390, metrics: this.generateMetrics() },
    { name: 'July', teachers: 100, students: 320, totalUsers: 420, metrics: this.generateMetrics() },
    { name: 'August', teachers: 110, students: 350, totalUsers: 460, metrics: this.generateMetrics() },
    { name: 'September', teachers: 95, students: 340, totalUsers: 435, metrics: this.generateMetrics() },
    { name: 'October', teachers: 85, students: 310, totalUsers: 395, metrics: this.generateMetrics() },
    { name: 'November', teachers: 75, students: 280, totalUsers: 355, metrics: this.generateMetrics() },
    { name: 'December', teachers: 65, students: 240, totalUsers: 305, metrics: this.generateMetrics() }
  ];

  selectedMonth = this.months[0]; // Default to January

  generateMetrics() {
    return [
      { label: 'Course Completion', percentage: Math.floor(Math.random() * 50) + 20, color: 'bg-success' },
      { label: 'User Engagement', percentage: Math.floor(Math.random() * 30) + 20, color: 'bg-info' },
      { label: 'Revenue Growth', percentage: Math.floor(Math.random() * 20) + 10, color: 'bg-warning' },
      { label: 'New Enrollments', percentage: Math.floor(Math.random() * 30) + 10, color: 'bg-danger' }
    ];
  }

  getPercentage(value: number, total: number): number {
    return total > 0 ? (value / total) * 100 : 0;
  }

  updateYear(event: any) {
    this.selectedYear = event.target.value;
  }

  updateMonth(event: any) {
    this.selectedMonth = this.months.find(m => m.name === event.target.value) || this.months[0];
  }
}
