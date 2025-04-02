import { CommonModule } from '@angular/common';
import { Component,Input,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainService } from '../../service/main.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  @Input() role=''

  registerForm!: FormGroup;
  showModal = false; // Ensure this is controlled properly
  isSubmitted = false;

  constructor(private fb: FormBuilder, private mainService: MainService) {} 

  ngOnInit(): void {
    this.initForm();
      // console.log('Role received in component:', this.role);
      // this.registerForm.patchValue({ role: this.role });
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['role'] && changes['role'].currentValue) {
  //     console.log('Role updated:', this.role);
  //     if (this.registerForm) {
  //       this.registerForm.patchValue({ role: this.role }); // Only update if form exists
  //     }
  //   }
  // }

  initForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      contactno: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: [this.role, Validators.required] // Set role initially
    });
  }
  



  // onsave() {
  //   this.isSubmitted = true;
  //   if (this.registerForm.valid) {
  //     console.log('Registration Successful', this.registerForm.value);
  //     alert('Registration Successful');
  //     this.closeRegisterModel();
  //   } else {
  //     console.log('Form Invalid:', this.registerForm.errors);
  //   }
  // }


  onsave(){
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      this.mainService.registerpost(this.registerForm.value).subscribe((res:any)=>{
        console.log(res);
        alert('Registration Successful');
        this.closeRegisterModel();
      });
    } else {
      console.log('Form Invalid:', this.registerForm.errors);
    }
  }

  closeRegisterModel() {
    this.showModal = false;
  }
  


}


