import { Component } from '@angular/core';
import { ViewprofileComponent } from "../viewprofile/viewprofile.component";
import { TeacherprofileComponent } from "../teacherprofile/teacherprofile.component";
import { DescriptionComponent } from "../description/description.component";
import { AccoumtdetailsComponent } from "../accoumtdetails/accoumtdetails.component";
import { Router,  } from '@angular/router';
import { ReportComponent } from "../report/report.component";
import { TeachermonthlyreportComponent } from "../teachermonthlyreport/teachermonthlyreport.component";

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ViewprofileComponent, TeacherprofileComponent, DescriptionComponent, AccoumtdetailsComponent, ReportComponent, TeachermonthlyreportComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  hide=""

  showViewProfile = true; // Default profile is shown initially
  showTeacherProfile = false;
  showDescription=false
  accountdetails=false
  report=false
  course=false
  
  constructor(private router:Router){}

  isVisible(x:string){
    this.hide=x
  }

  hideAllExcept(profile: string) {
    this.showViewProfile = profile === 'view';
    this.showTeacherProfile = profile === 'teacher';
    this.showDescription = profile === 'description'
    this.accountdetails = profile === 'account'
    this.report= profile === 'report'
    this.course= profile === 'course'
    
  }

  logout(){
    this.router.navigate(['elearn'])
  }

}
