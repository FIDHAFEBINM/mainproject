import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoryview.component.html',
  styleUrl: './categoryview.component.css'
})
export class CategoryviewComponent implements OnInit{
  list=[
    {image:"/image/doc.jpg",category:'Data Sience'},
    {image:"/image/doc.jpg",category:'Health Science'},
    {image:"/image/doc.jpg",category:'Web development'},
    {image:"/image/doc.jpg",category:'Flutter'},
    {image:"/image/doc.jpg",category:'ML'},
    {image:"/image/doc.jpg",category:'ML'},
    {image:"/image/doc.jpg",category:'ML'},
    {image:"/image/doc.jpg",category:'ML'},
    {image:"/image/doc.jpg",category:'ML'},
    {image:"/image/doc.jpg",category:'ML'},
    {image:"/image/doc.jpg",category:'ML'},


  ]

  groupedList:any[][]=[]

  constructor(private router:Router){}

  ngOnInit(): void {
      this.groupitems(6)

  }

  gocourse(){
    this.router.navigate(['category'])
  }
  groupitems(chunksize:number){
    for(let i=0;i<this.list.length;i+=chunksize){
      this.groupedList.push(this.list.slice(i,i+chunksize))
    }

  }
}
