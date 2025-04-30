import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-adminviewusers',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminviewusers.component.html',
  styleUrl: './adminviewusers.component.css'
})
export class AdminviewusersComponent implements OnInit {
  users:any = [];

  constructor(private router: Router,private mainserve:MainService) {} 

  ngOnInit(): void {
      this.loaduser()
  }

  viewUser(userId: number) {
    this.router.navigate(['/admin/user-details', userId]);
  }

  editUser(userId: number) {
    this.router.navigate(['/admin/edit-user', userId]);
  }

  loaduser(){
    this.mainserve.loginget().subscribe((res:any)=>{
      this.users=res
    })
  }

  // deleteUser(userId: number) {
  //   if (confirm('Are you sure you want to delete this user?')) {
  //     this.users = this.users.filter(user => user.id !== userId);
  //   }
}

