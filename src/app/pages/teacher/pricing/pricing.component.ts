import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  priceForm!: FormGroup;
  title= ['Technology', 'Science', 'Math']; // Example categories     
  price= [100,200,300]; // Example subcategories
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with controls
    this.priceForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.priceForm.valid) {
      console.log('Form Submitted!', this.priceForm.value);
    }
  }
}
