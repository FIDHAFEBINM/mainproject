import { Component } from '@angular/core';
import { Login } from '../../classes/const';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainService } from '../../service/main.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterOutlet,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginform !: FormGroup
  loginobj:Login=new Login()   
  loginList:Login []=[]
 

  constructor(private fb:FormBuilder,private router:Router,private mainserv:MainService){
    this.createform()
  }

  createform(){
      this.loginform=this.fb.group({
      username:['', [Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }

  // onSave(){
  //   debugger
  //   const username = this.loginform.get('username')?.value;
  //   const password = this.loginform.get('password')?.value;
  
  //   if (username == this.loginobj.username && password == this.loginobj.password) {
  //     alert('Login successful!');
  //     this.router.navigate(['/elearn'])

  //   } 
  //   else if(username === 'admin' && password === 'admin'){
  //     alert("login Successfully");
  //     this.router.navigate(['admin'])
  //   }
  //   else if(username === 'teacher' && password === 'teacher'){
  //     alert("login Successfully");
  //     this.router.navigate(['teacher/registeredteacher'])
  //   }
  //   else {
  //     alert('Invalid credentials');
  //   }
  //   }

  onSave() {
    const username = this.loginform.get('username')?.value;
    const password = this.loginform.get('password')?.value;

    if(username === 'admin' && password === 'admin'){
         alert("login Successfully");
         this.router.navigate(['admin'])
    }
    else{
    this.mainserv.loginpost(this.loginform.value).subscribe((res:any)=>{
      console.log(res)
      if(res.token){
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('loginId', res.loginId);
        console.log("Login ID Stored:", res.loginId);
      
        if(res.role === 'teacher'){
          alert('Login Successful');
          this.router.navigate(['/teacher/registeredteacher'])
        }
        else if(res.role === 'student'){
          alert('Login Successful');
          this.router.navigate(['/elearn'])
        }
        else {
          console.warn("Unknown role:", res.role);
          this.router.navigate(['/']);
        }
      }
      else {
        alert("Invalid credentials");
      }
    },
    (error) => {
      console.log("Login failed:", error);
      alert(error.error.message || "Login failed");
    
    })
  }
  
  }
  }

