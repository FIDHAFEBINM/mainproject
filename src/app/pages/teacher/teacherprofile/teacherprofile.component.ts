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
  teacherForm!: FormGroup;
  selectedImageFile: File | null = null;
  id: any = '';
  imagePreview: string | ArrayBuffer | null = null;
  isEditMode: boolean = false;
  showAddButton: boolean = false; // Flag to control "Add" button visibility

  constructor(private mainserv: MainService, private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      userId: [this.id],
      subject: ['', Validators.required],
      experience: ['', Validators.required],
      qualification: ['', Validators.required],
      availability: ['', Validators.required],
      profileImage: ['']
    });
  }

  ngOnInit(): void {
    // Retrieve the loginId from localStorage
    this.id = localStorage.getItem('loginId') || '';
    console.log(this.id);
    this.loadTeacherProfile();
  }

  loadTeacherProfile() {
    if (this.id) {
      this.mainserv.viewteacher(this.id).subscribe(
        (res: any) => {
          if (res && res.subject && res.experience && res.qualification && res.availability) {
            // If profile data exists, load it into the form
            this.isEditMode = true;
            this.teacherForm.patchValue({
              subject: res.subject,
              experience: res.experience,
              qualification: res.qualification,
              availability: res.availability
            });
            this.imagePreview = `http://localhost:3000/uploads/${res.profileImage}`;
            this.showAddButton = false; // Hide "Add" button if profile is loaded
            console.log('Profile loaded:', res);
          } else {
            // If no profile data exists, show "Add" button
            this.showAddButton = true;
          }
        },
        (error) => {
          console.error('Error loading profile:', error);
          this.showAddButton = true; // Show "Add" button if an error occurs
        }
      );
    } else {
      console.log('No login ID found.');
      this.showAddButton = true; // Show "Add" button if no ID is found
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      const formData = new FormData();
      formData.append('userId', this.id);
      formData.append('subject', this.teacherForm.get('subject')?.value);
      formData.append('experience', this.teacherForm.get('experience')?.value);
      formData.append('qualification', this.teacherForm.get('qualification')?.value);
      formData.append('availability', this.teacherForm.get('availability')?.value);

      if (this.selectedImageFile) {
        formData.append('profileImage', this.selectedImageFile);
      }

      if (this.isEditMode) {
        this.mainserv.teacherregisterupdate(formData, this.id).subscribe(
          (res: any) => {
            alert('Profile updated successfully');
            console.log(res);
            this.showAddButton = false; // Hide "Add" button after successful update
          },
          (error) => {
            console.error('Error updating profile:', error);
          }
        );
      } else {
        this.mainserv.teacherregisterpost(formData, this.id).subscribe(
          (res: any) => {
            alert('Profile created successfully');
            console.log(res);
            this.showAddButton = false; // Hide "Add" button after successful creation
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
