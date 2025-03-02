import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingteacher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingteacher.component.html',
  styleUrl: './landingteacher.component.css'
})
export class LandingteacherComponent {

  card=[
    {title:'Plan it',image:'/image/doc.jpg',desribe:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi eos odit laborum corporis ex sint? Voluptate, blanditiis ex, necessitatibus perspiciatis doloremque deserunt inventore non ipsum dolores illum placeat minima'},
    {title:'create it',image:'/image/doc.jpg',desribe:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi eos odit laborum corporis ex sint? Voluptate, blanditiis ex, necessitatibus perspiciatis doloremque deserunt inventore non ipsum dolores illum placeat minima'},
    {title:'implement it',image:'/image/doc.jpg',desribe:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi eos odit laborum corporis ex sint? Voluptate, blanditiis ex, necessitatibus perspiciatis doloremque deserunt inventore non ipsum dolores illum placeat minima'}

  ]
  

  constructor(private route:Router){}
  onstart(){
    this.route.navigate(['/teacher/registeredteacher'])
  }

}
