import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminlandingcontet',
  standalone: true,
  imports: [],
  templateUrl: './adminlandingcontet.component.html',
  styleUrl: './adminlandingcontet.component.css'
})
export class AdminlandingcontetComponent {
  totalUsers: number = 500;
  totalCourses: number = 30;
  pendingAssignments: number = 10;
  totalTeachers:number =30

  // Current active section for navigation
  currentSection: string = 'dashboard';
  constructor(private router :Router) { }
  teacher() {
    alert('Add Course functionality will be implemented.');
    this.router.navigate(['/admin/adminviewteachercourses']);
  }

  // Placeholder for managing users
  viewAllUsers() {
    alert('View all users functionality will be implemented.');
    this.router.navigate(['/admin/adminviewusers']);

  }
  viewreport() {
    this.router.navigate(['/admin/adminreports']);

  }

}
