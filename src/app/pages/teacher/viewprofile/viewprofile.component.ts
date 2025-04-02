import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-viewprofile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewprofile.component.html',
  styleUrl: './viewprofile.component.css'
})
export class ViewprofileComponent implements OnInit{

  profileData :any= [];
  description:any=[];
  teacherId: string = localStorage.getItem('loginId') || '';
  teacherreviews: any[] = [];
  teachertotalreview: number = 0;
  averageteacherrating: number = 0;
  

  // rating: number = 4.3;
  // totalRatings: number = 1742;
  // learners: number = 122216;

  constructor(private mainserve:MainService){}
  ngOnInit(){
    this.viewteacher();
    this.viewdescription()
    this.loadreviewbyteacher()
  }

  viewteacher(){
    this.mainserve.viewteacher(this.teacherId).subscribe((res:any)=>{
      console.log(res);
      this.profileData = res;
    } )
  }

  viewdescription(){
    this.mainserve.viewtaecherdescription(this.teacherId).subscribe((res:any)=>{
      console.log(res);
      this.description = res;
    } )
  }

  loadreviewbyteacher() {
    this.mainserve.viewreviewbyteacherid(this.teacherId).subscribe(
      (res: any) => {
        this.teacherreviews = res;
        this.teachertotalreview = this.teacherreviews.length;

        if (this.teachertotalreview > 0) {
          const totalRating = this.teacherreviews.reduce(
            (sum, review) => sum + review.rating,
            0
          );
          this.averageteacherrating = totalRating / this.teachertotalreview;
        } else {
          this.averageteacherrating = 0;
        }

        console.log('Teacher Reviews:', this.teacherreviews);
        console.log(
          `Average Rating: ${this.averageteacherrating}, Total Reviews: ${this.teachertotalreview}`
        );
      },
      (error) => {
        console.error('Error fetching teacher reviews:', error);
      }
    );
  }

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.ceil(rating)).fill(0);
  }
}
