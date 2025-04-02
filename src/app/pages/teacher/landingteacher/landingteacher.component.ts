import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from "../../register/register.component";

@Component({
  selector: 'app-landingteacher',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './landingteacher.component.html',
  styleUrl: './landingteacher.component.css'
})
export class LandingteacherComponent {

    @ViewChild ('registerModel') registerModel !: RegisterComponent;
  

  card=[
    {title:'Plan it',image:'/image/doc.jpg',desribe:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi eos odit laborum corporis ex sint? Voluptate, blanditiis ex, necessitatibus perspiciatis doloremque deserunt inventore non ipsum dolores illum placeat minima'},
    {title:'create it',image:'/image/doc.jpg',desribe:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi eos odit laborum corporis ex sint? Voluptate, blanditiis ex, necessitatibus perspiciatis doloremque deserunt inventore non ipsum dolores illum placeat minima'},
    {title:'implement it',image:'/image/doc.jpg',desribe:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi eos odit laborum corporis ex sint? Voluptate, blanditiis ex, necessitatibus perspiciatis doloremque deserunt inventore non ipsum dolores illum placeat minima'}

  ]
  

  constructor(private route:Router){}
  // onstart(){
  //   if(this.registerModel){
  //     this.registerModel.showModal=true 
  //   }
  // }

  onstart(){
    this.route.navigate(['/teacher/registeredteacher'])
  }

}
