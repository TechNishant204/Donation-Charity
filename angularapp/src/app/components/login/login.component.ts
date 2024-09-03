import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loginErrorMsg:string;

  constructor(private authService:AuthService, private builder:FormBuilder, private rt:Router) { 
    this.loginForm = builder.group({
      email:builder.control("", [Validators.required,Validators.email]),
      password:builder.control("", [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')])
    });
  }

  public get email(){
    return this.loginForm.get("email");
  }

  public get password(){
    return this.loginForm.get("password");
  }

  ngOnInit(): void {
  }

  public loginUser(){
    this.authService.loginUser(this.loginForm.value).subscribe(data => {
      console.log(JSON.stringify(data));
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("username", data.username);
      localStorage.setItem("email", data.email);
      localStorage.setItem("role", data.role);
      localStorage.setItem("token", data.token);
      this.rt.navigate(['/loginhome']);
    },error=>{
      this.loginErrorMsg = JSON.stringify(error.error).substring(1, 20);
    })
  }

  public eraseError(){
    this.loginErrorMsg = "";
  }
  



}
