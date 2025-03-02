import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewteachers',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './viewteachers.component.html',
  styleUrl: './viewteachers.component.css'
})
export class ViewteachersComponent {
  teachers = [
    {
      name: 'Teacher 1',
      subject: 'Math',
      email: 'teacher1@example.com',
      photo: 'image/doc.jpg',
      courses: [{ name: 'Algebra 101', rating: 4.5, videoUrl: 'assets/sample.mp4' }],
    },
    {
      name: 'Teacher 2',
      subject: 'Science',
      email: 'teacher2@example.com',
      photo: 'image/doc.jpg',
      courses: [{ name: 'Physics Basics', rating: 5, videoUrl: 'assets/sample.mp4' }],
    },
    // Add more teachers as needed
  ];

  itemsPerPage = 20;
  currentPage = 1;
  totalPages = Math.ceil(this.teachers.length / this.itemsPerPage);

  constructor(private router: Router) {}

  get paginatedTeachers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.teachers.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  viewCourses(teacher: any) {
    console.log(`Viewing courses for ${teacher.name}`);
    this.router.navigate(['/admin/adminviewteachercourses'], {
      state: { teacher },
    });
  }  
}
