import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainService } from '../../../service/main.service';


@Component({
  selector: 'app-teacherprofile',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './teacherprofile.component.html',
  styleUrl: './teacherprofile.component.css'
})
export class TeacherprofileComponent {
  teacherForm !: FormGroup;
  selectedImageFile: File | null = null;

  id:any=''
  imagePreview: string | ArrayBuffer | null = null;
  imageFile: File | null = null; // Store the file
  isEditMode:boolean=false;

   
  constructor(private mainserv:MainService,private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      userId:[this.id],
      subject: ['', Validators.required],
      experience: ['',Validators.required],
      qualification: ['',Validators.required],
      availability: ['',Validators.required],
      profileImage:[''] 
    });
   }

  ngOnInit(): void {
    // Retrieve the loginId from localStorage
    this.id = localStorage.getItem('loginId') || '';
    console.log(this.id)
    this.loadteacherprofile()
  }


  loadteacherprofile(){
    this.mainserv.viewteacher(this.id).subscribe(
      (res: any) => {
        if (res) {
          this.isEditMode = true; // Enable edit mode
          this.teacherForm.patchValue({
            subject: res.subject,
            experience: res.experience,
            qualification: res.qualification,
            availability: res.availability
          });
          this.imagePreview = `http://localhost:3000/uploads/${res.profileImage}`; // Load existing image
          console.log('Profile loaded:', res);
        }
      },
      (error) => {
        console.error('Error loading profile:', error);
      }
    );
  }
  // Handle the image file selection
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageFile = file;

      // Preview image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  // Handle form submission
  onSubmit() {
    this.teacherForm.patchValue({ userId: this.id });

    if (this.teacherForm.valid) {
      const formData = new FormData();
      formData.append('userId', this.id);
      formData.append('subject', this.teacherForm.get('subject')?.value);
      formData.append('experience', this.teacherForm.get('experience')?.value);
      formData.append('qualification', this.teacherForm.get('qualification')?.value);
      formData.append('availability', this.teacherForm.get('availability')?.value);

      if (this.selectedImageFile) {
        formData.append('profileImage', this.selectedImageFile); // Append the image file if available
      }
      if (this.isEditMode) {
        // Update existing profile
        this.mainserv.teacherregisterupdate(formData, this.id).subscribe(
          (res: any) => {
            alert('Profile updated successfully');
            console.log(res);
          },
          (error) => {
            console.error('Error updating profile:', error);
          }
        );
      } else {
        // Create new profile
        this.mainserv.teacherregisterpost(formData, this.id).subscribe(
          (res: any) => {
            alert('Profile created successfully');
            console.log(res);
          },
          (error) => {
            console.error('Error creating profile:', error);
          }
        );
      }
    } else {
      alert('Please fill all required fields.');
    }
  }
}
