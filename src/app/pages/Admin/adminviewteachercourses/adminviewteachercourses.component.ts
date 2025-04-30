import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-adminviewteachercourses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminviewteachercourses.component.html',
  styleUrl: './adminviewteachercourses.component.css'
})
export class AdminviewteachercoursesComponent implements OnInit{
  teachers:any = [];

  constructor(private router: Router,private route: ActivatedRoute,private mainserve:MainService) {}

  ngOnInit(): void {
      this.loadteacher() 
  }

  viewCourses(teacherId:string) {
    this.router.navigate(['/admin/adminviewcourses-details',teacherId]);
  }

  loadteacher() {
    this.mainserve.loginget().subscribe((res: any) => {
      this.teachers = res.filter((user: any) => user.role === 'teacher');
    });
  }

}
