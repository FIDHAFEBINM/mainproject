import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminviewusers',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminviewusers.component.html',
  styleUrl: './adminviewusers.component.css'
})
export class AdminviewusersComponent {
  users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Teacher', status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Student', status: 'Inactive' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Admin', status: 'Active' }
  ];

  constructor(private router: Router) {}

  viewUser(userId: number) {
    this.router.navigate(['/admin/user-details', userId]);
  }

  editUser(userId: number) {
    this.router.navigate(['/admin/edit-user', userId]);
  }

  deleteUser(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  }
}
