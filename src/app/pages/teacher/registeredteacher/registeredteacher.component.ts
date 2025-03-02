import { Component } from '@angular/core';
import { SelectedteachercourseComponent } from "../selectedteachercourse/selectedteachercourse.component";
import { ViewcourseComponent } from "../viewcourse/viewcourse.component";

@Component({
  selector: 'app-registeredteacher',
  standalone: true,
  imports: [ ViewcourseComponent],
  templateUrl: './registeredteacher.component.html',
  styleUrl: './registeredteacher.component.css'
})
export class RegisteredteacherComponent {

}
