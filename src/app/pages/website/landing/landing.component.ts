import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { RegisterComponent } from "../../register/register.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RegisterComponent,CommonModule,FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  searchQuery: string = '';

  islandingcomponent:boolean=false
  selectedRole: string = '';
  student='student'

  @ViewChild('registerModel') registerModel !: RegisterComponent;
  categories = [
    {
      name: 'Data Science',
      subcategories: [
        'Bachelor of Science in Data Science & AI',
        'Postgraduate Diploma in Applied Statistics',
        'Master of Computer Science in Data Science'
      ]
    },
    {
      name: 'Business',
      subcategories: [
        'Master of Business Administration (iMBA)',
        'Executive MBA',
        'Master of Science in Management (iMSM)'
      ]
    }
  ];



  constructor(private router:Router,private route:ActivatedRoute){}

  ngOnInit(){
    this.router.events.subscribe(() => {
      this.islandingcomponent = this.router.url === '/landing';
    });
  }
  search() {
    if (this.searchQuery.trim()) {
      console.log('Navigating with search query:', this.searchQuery); // Debugging log
      this.router.navigate(['/category'], { queryParams: { search: this.searchQuery.trim() } });
    } else {
      alert('Please enter a search term.');
    }
  }


  openRegisterModel(){
    if(this.registerModel){
      this.registerModel.showModal=true 
    }
  }

  goCart(){
    this.router.navigate(['cart'])
  }






}
