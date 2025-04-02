import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../../../service/main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  descriptionForm!: FormGroup;
  id: string = '';
  isEditMode:boolean=false;

  constructor(private fb: FormBuilder, private router: Router, private mainserve: MainService) {
    this.descriptionForm = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(600)]]
    });
  }

  ngOnInit() {
    // Retrieve the loginId from localStorage and ensure it's a string
    this.id = localStorage.getItem('loginId') || '';
    console.log('Logged in user ID:', this.id);
  
    // Load the description
    this.loadDescription();
  }

  loadDescription(): void {
    this.mainserve.viewtaecherdescription(this.id).subscribe(
      (res: any) => {
        if (res && res.description) {
          this.isEditMode = true; // Enable edit mode
          this.descriptionForm.patchValue({
            description: res.description
          });
          console.log('Description loaded:', res);
        }
      },
      (err) => {
        console.error('Error loading description:', err);
      }
    );
  }




  onSubmit(): void {
    if (this.descriptionForm.invalid) {
      alert('Please provide a valid description (max 600 characters).');
      return;
    }
  
    // Add or update the description based on the mode
    if (this.isEditMode) {
      // Update existing description
      this.mainserve.updateteacherdescription(this.descriptionForm.value, this.id).subscribe(
        (res: any) => {
          alert('Description updated successfully');
          console.log('Updated description:', res);
        },
        (err) => {
          console.error('Error updating description:', err);
        }
      );
    } else {
      // Add new description
      this.mainserve.teacherdescription(this.descriptionForm.value, this.id).subscribe(
        (res: any) => {
          alert('Description added successfully');
          console.log('Added description:', res);
        },
        (err) => {
          console.error('Error adding description:', err);
        }
      );
    }
  }
}
