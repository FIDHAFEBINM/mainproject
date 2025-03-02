import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-choosecategory',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './choosecategory.component.html',
  styleUrl: './choosecategory.component.css'
})
export class ChoosecategoryComponent {
  categoryForm !: FormGroup;
  categories = ['Technology', 'Science', 'Math']; // Example categories
  subcategories = ['AI', 'Physics', 'Algebra']; // Example subcategories

  video: string = '';
  selectedVideoFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with controls
    this.categoryForm = this.fb.group({
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      topic: ['', Validators.required],
      video:['',Validators.required],
      sectionImage:['',Validators.required],
      about:['',Validators.required]
    });
  }

  

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedVideoFile = file;
      // Create a URL for the uploaded video file
      this.video = URL.createObjectURL(file);
      // No need to update the FormControl value here
    }
  }


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
  

  onSubmit(): void {
    if (this.categoryForm.valid) {
      console.log('Form Submitted!', this.categoryForm.value);
   
      }
    }
  }

