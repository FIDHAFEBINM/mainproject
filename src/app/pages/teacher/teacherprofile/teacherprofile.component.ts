import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacherprofile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './teacherprofile.component.html',
  styleUrl: './teacherprofile.component.css'
})
export class TeacherprofileComponent {
  
  imagePreview: string | ArrayBuffer | null = null;

  // Handle the image file selection
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Handle form submission
  onSubmit(form: any) {
    // const teacherName = form.value.teacherName;
    //   const teacherEmail = form.value.teacherEmail;
    //   const teacherPhone = form.value.teacherPhone;
    console.log( form.value);
    // alert(teacherName+teacherEmail+teacherPhone)
  }
}
