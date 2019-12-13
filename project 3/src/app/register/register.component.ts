import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    public authService: AuthService) {
    this.registerForm = this.fb.group({
      firstname:'',
      lastname:'',
      email:'',
      password:''
    });
   }

  ngOnInit() {
  }

  onRegister(){
    this.submitted = true;
    localStorage.clear();
    this.authService.onRegister(JSON.stringify(this.registerForm.value));
    this.router.navigateByUrl('/login');
  }

}
