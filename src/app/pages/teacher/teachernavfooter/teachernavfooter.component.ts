import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-teachernavfooter',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './teachernavfooter.component.html',
  styleUrl: './teachernavfooter.component.css'
})
export class TeachernavfooterComponent {

  constructor(private router:Router){}
  profile(){
    this.router.navigate(['/teacher/demo']) 
   }
   logout(){
    this.router.navigate(['elearn'])
   }

   gotohome(){
    this.router.navigate(['/teacher/registeredteacher'])
   }
}
