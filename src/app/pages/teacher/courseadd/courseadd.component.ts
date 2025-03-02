import { Component } from '@angular/core';
import { ChoosecategoryComponent } from "../choosecategory/choosecategory.component";
import { CommonModule } from '@angular/common';
import { AddsectionComponent } from "../addsection/addsection.component";
import { PricingComponent } from "../pricing/pricing.component";
import { ViewcourseComponent } from "../viewcourse/viewcourse.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courseadd',
  standalone: true,
  imports: [ChoosecategoryComponent, CommonModule, AddsectionComponent, PricingComponent, ViewcourseComponent],
  templateUrl: './courseadd.component.html',
  styleUrl: './courseadd.component.css'
})
export class CourseaddComponent {

  addcourse = true; // Default profile is shown initially
  addsection = false;
  pricing=false
  accountdetails=false
  viewing=false

  hideAllExcept(profile: string) {
    this.addcourse = profile === 'addcourse';
    this.addsection = profile === 'addsection';
    this.pricing= profile === 'pricing'
    this.accountdetails = profile === 'account'
    this.viewing= profile === 'viewing'
    
  }

  
}
