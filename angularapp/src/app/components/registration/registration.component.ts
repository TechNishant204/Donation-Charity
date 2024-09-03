import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm:FormGroup;
  
  constructor(private authService:AuthService, private builder:FormBuilder, private rt:Router) { 
    this.registerForm = builder.group({
      username:builder.control("", Validators.required),
      email:builder.control("", [Validators.required,Validators.email]),
      password:builder.control("", [Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]),
      confirmPassword:builder.control("", Validators.required),
      mobileNumber:builder.control("", [Validators.required,Validators.pattern('[0-9]{10}')]),
      role:builder.control("", Validators.required)
    });
  }

  public get username(){
    return this.registerForm.get("username");
  }

  
  public get email(){
    return this.registerForm.get("email");
  }

  public get password(){
    return this.registerForm.get("password");
  }

  public get confirmPassword(){
    return this.registerForm.get("confirmPassword");
  }

  public get mobileNumber(){
    return this.registerForm.get("mobileNumber");
  }

  public get role(){
    return this.registerForm.get("role");
  }



  ngOnInit(): void {
  }

  public registerUser(){
    console.log(JSON.stringify(this.registerForm.value));
    if (this.registerForm.valid) {
      this.authService.registerUser(this.registerForm.value).subscribe(data => {
        Swal.fire({
          icon:'success',
          title: "Registered Successfully",
          // showDenyButton: true,
          // showCancelButton: true,
          confirmButtonText: "Ok",
          // denyButtonText: `Don't save`
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.rt.navigate(['/login']);
          }
        });
      },error=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email Already Exists!",
        });
      });
      
    }
   
  }

  public navigateLogin(){
    this.rt.navigate(['/login']);
  }
  passwordMatch() {
    console.log("password is"+JSON.stringify(this.registerForm.value.password))
    if(this.registerForm.value.password!=this.registerForm.value.confirmPassword){
      document.getElementById("matherror").innerHTML="*Confirm password doesn't match"
    }
    else{
      document.getElementById("matherror").innerHTML=""
    }
  }

}
