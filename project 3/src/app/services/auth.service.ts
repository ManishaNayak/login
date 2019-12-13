import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router:Router) { }

  onRegister(value){
    return localStorage.setItem('database',value);
  }

  onLogin(email, password){
    const UserData =JSON.parse(localStorage.getItem('database'));
    console.log(UserData);

    if(UserData.email === email && UserData.password === password){
      this.router.navigateByUrl('/home');
    }else{
      alert("Invalid email or password");
    }
  }
}
