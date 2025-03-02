import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  showModal = false; // Ensure this is controlled properly
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      contactno: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onsave() {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      console.log('Registration Successful', this.registerForm.value);
      alert('Registration Successful');
      this.closeRegisterModel();
    } else {
      console.log('Form Invalid:', this.registerForm.errors);
    }
  }

  closeRegisterModel() {
    this.showModal = false;
  }
  


}


