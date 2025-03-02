import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminviewteachercourses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminviewteachercourses.component.html',
  styleUrl: './adminviewteachercourses.component.css'
})
export class AdminviewteachercoursesComponent {
  teachers = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', expertise: 'Mathematics', profileImage: 'image/doc.jpg' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', expertise: 'Physics', profileImage: 'image/doc.jpg' },
    { id: 3, name: 'Robert Brown', email: 'robertbrown@example.com', expertise: 'Chemistry', profileImage: 'image/doc.jpg' }
  ];

  constructor(private router: Router,private route: ActivatedRoute) {}

  viewCourses() {
    this.router.navigate(['/admin/adminviewcourses-details']);
  }
}
