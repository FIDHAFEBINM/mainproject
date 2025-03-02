import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
  forgotPasswordForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.forgotPasswordForm.valid) {
      console.log('Form Submitted:', this.forgotPasswordForm.value);
      alert('A password reset link has been sent to your email.');
    } else {
      console.log('Form Errors:', this.forgotPasswordForm.errors);
    }
  }
 }

