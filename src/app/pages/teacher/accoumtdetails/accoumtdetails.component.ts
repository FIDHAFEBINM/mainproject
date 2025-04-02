import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-accoumtdetails',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './accoumtdetails.component.html',
  styleUrl: './accoumtdetails.component.css'
})
export class AccoumtdetailsComponent {
  accountForm!: FormGroup;

  constructor(private fb: FormBuilder, ) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      accountHolder: ['', [Validators.required, Validators.minLength(3)]],
      accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9,18}$')]],
      ifscCode: ['', [Validators.required, Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')]],
      bankName: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.accountForm.valid) {
       alert('Account details added successfully!');   
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}
