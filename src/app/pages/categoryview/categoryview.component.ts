import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-categoryview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoryview.component.html',
  styleUrl: './categoryview.component.css'
})
export class CategoryviewComponent implements OnInit{
  list:any=[ ]

  groupedList:any[][]=[]

  constructor(private router:Router,private mains:MainService ){}

  ngOnInit(): void {
    this.loadcategory()
      this.groupitems(6)
      console.log('Category List:', this.list); // Debugging


  }

  gocourse(categoryId:string){
    this.router.navigate(['category'],{ queryParams: { category: categoryId } })
  }
  groupitems(chunksize:number){
    for(let i=0;i<this.list.length;i+=chunksize){
      this.groupedList.push(this.list.slice(i,i+chunksize))
    }

  }

  loadcategory(){
    this.mains.viewcategory().subscribe((res:any)=>{
      this.list=res
      this.groupitems(6); // Group items after the list is populated

    })
  }

  
}
