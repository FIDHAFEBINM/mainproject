import { Component,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-adminlandingcontet',
  standalone: true,
  imports: [],
  templateUrl: './adminlandingcontet.component.html',
  styleUrl: './adminlandingcontet.component.css'
})
export class AdminlandingcontetComponent  implements OnInit {
  totalUsers: number = 500;
  totalCourses: number = 0;
  pendingAssignments: number = 10;
  totalTeachers:number =30
  users: any[] = []; // Store all users
  teachersCount: number = 0; // Count of teachers
  usersCount: number = 0; // Count of users

  // Current active section for navigation
  currentSection: string = 'dashboard';
  constructor(private router :Router,private mainserve:MainService) { } 

  ngOnInit(): void {
    this.loadRegisteredUsers();
    this.loadCourses()
  }

  loadRegisteredUsers(): void {
    this.mainserve.loginget().subscribe(
      (res: any) => {
        this.users = res; // Store all users
        this.teachersCount = this.users.filter(user => user.role === 'teacher').length; // Count teachers
        this.usersCount = this.users.filter(user => user.role === 'student').length; // Count users
      },
      (error: any) => {
        console.error('Error fetching registered users:', error);
        alert('Failed to load registered users.');
      }
    );
  }

  loadCourses(): void {
    this.mainserve.viewCourse().subscribe(
      (res: any) => {
        this.totalCourses = res.length; // Calculate the total number of courses
      },
      (error: any) => {
        console.error('Error fetching courses:', error);
        alert('Failed to load courses.');
      }
    );
  }

  
  teacher() {
    this.router.navigate(['/admin/adminviewteachercourses']);
  }

  // Placeholder for managing users
  viewAllUsers() {
    this.router.navigate(['/admin/adminviewusers']);

  }
  viewreport() {
    this.router.navigate(['/admin/adminreports']);

  }

}
