import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'  
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    public authService: AuthService) {
    this.loginForm = this.fb.group({
      email:'',
      password:''
    });
   }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.loginForm.value);
    this.authService.onLogin(this.loginForm.get('email').value, 
    this.loginForm.get('password').value);
  }

}
