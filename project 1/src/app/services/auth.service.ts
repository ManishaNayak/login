import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) {}

  onRegist(value){
    return localStorage.setItem('database',value);
  }

  onLogin(email, password){
    const userData = JSON.parse(localStorage.getItem('database'));

    if(userData.email === email && userData.password === password){
      this.router.navigateByUrl('/home');
    }else{
      alert("Invalid email or password");
    }
  }
}
