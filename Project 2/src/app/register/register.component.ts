import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registForm:FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    public authService: AuthService) {
    this.registForm = this.fb.group({
      firstname:'',
      lastname:'',
      email:'',
      password:''
    });

   }

  ngOnInit(){}

   onRegister(){
    localStorage.clear();
    console.log(this.registForm.value);
    this.authService.onRegister(JSON.stringify(this.registForm.value));
    this.router.navigateByUrl('/login');     
   }
}
