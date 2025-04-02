import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminlanding',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './adminlanding.component.html',
  styleUrl: './adminlanding.component.css'
})
export class AdminlandingComponent {
  sections = [
    { key: 'adminlandingcontent', label: 'Dashboard' }, 
    { key: 'adminviewteachercourses', label: 'Manage Teachers' },
    { key: 'adminviewusers', label: 'Manage Users' },
    // { key: 'adminviewcourses', label: 'Manage Courses' },
    // { key: 'adminreports', label: 'Reports' },  
    { key: 'addcategory', label: 'Manage Category'},    
  
  ];

  constructor(private router: Router) {}

  logout() {
    console.log('Logging out...');
    this.router.navigate(['/elearn']);
  }
}
