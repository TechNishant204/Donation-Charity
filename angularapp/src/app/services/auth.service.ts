import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //backendUrl = "https://ide-ecaecbebfdbbbababddfceeacfaf.premiumproject.examly.io/proxy/8080/api";
  backendUrl = environment.backendUrl;

  private storageKey = 'currentUser';

  constructor(private http:HttpClient) { }

  public registerUser(user:User):Observable<any>{
    return this.http.post(this.backendUrl + "/register", user);
  }

  public loginUser(user:User):Observable<any>{
    return this.http.post(this.backendUrl + "/login", user);
  }


  // register(username: string, email: string, password: string, mobileNumber:string, role: string) {
  //   const user = { username, password, role };
  //   localStorage.setItem(username, JSON.stringify(user));
  //   // this.router.navigate(['/login']);
  // }

  // login(username: string, password: string) {
  //   const storedUser = localStorage.getItem(username);
  //   if (storedUser) {
  //     const user = JSON.parse(storedUser);
  //     if (user.password === password) {
  //       localStorage.setItem(this.storageKey, JSON.stringify(user));
  //       if (user.role === 'ADMIN') {
  //         // this.router.navigate(['/admin/home']);
  //       } else if (user.role === 'USER') {
  //         // this.router.navigate(['/user/home']);
  //       }
  //     } else {
  //       alert('Invalid email or password');
  //     }
  //   } else {
  //     alert('User not found');
  //   }
  // }

  // logout() {
  //   localStorage.removeItem(this.storageKey);
  //   this.router.navigate(['/login']);
  // }

  getCurrentUser() {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }

}
