import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  regForm:FormGroup;
  submitted =false;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    public authService: AuthService) {
    this.regForm = this.fb.group({
      firstname:'',
      lastname:'',
      email:'',
      password:''
    });
   }

  ngOnInit() {
  }
  onRegist(){
    this.submitted = true;
    console.log(this.regForm.value);
    this.authService.onRegist(JSON.stringify(this.regForm.value));
    this.router.navigateByUrl('/login');
    
  }
}
