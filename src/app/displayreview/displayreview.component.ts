import { CommonModule } from '@angular/common';
import { Component,OnInit,Input } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-displayreview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './displayreview.component.html',
  styleUrl: './displayreview.component.css'
})
export class DisplayreviewComponent implements OnInit{
  @Input() courseId!: string  // Accept course ID as input   
  
  reviews:any = [];

  constructor(private mainserve:MainService){}

  ngOnInit(): void {
   this.loadreview()   
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

  loadreview(){
    this.mainserve.viewreviewbyid(this.courseId).subscribe((res:any)=>{
      this.reviews=res
    })
  }


}

