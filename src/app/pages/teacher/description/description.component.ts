import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  teacherDescription: string = '';

  constructor(private router:Router) {}

  onSubmit(form: any): void {
    if (form.valid) {
      // Capture the teacher's description
      this.teacherDescription = form.value.teacherDescription;

      // Navigate to the teacher description page
      // this.router.navigate(['/teacher-description'], { state: { description: this.teacherDescription } });
    } else {
      console.log('Form is invalid');
    }
  }
}
