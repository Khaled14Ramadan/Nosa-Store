import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanRegisterDeactivate } from 'src/app/interfaces/can-register-deactivate';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit , CanRegisterDeactivate{
 checkPassLowerCase :boolean =false;
 checkPassUpperCase :boolean =false;
 checkPassNum :boolean =false;
 checkPassLength : boolean =false;

  registerForm: FormGroup;
  chechPassword: boolean = true;
  constructor(
    private router: Router,
    private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
        userName: ['', [Validators.required, Validators.pattern(/^[^\s]*$/)]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
        confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
      }
    )
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.router.navigate(['/login']);
  }

  get registerContral() {
    if (this.registerForm.controls['confirmPassword'].touched && !this.registerForm.controls['confirmPassword'].errors) {
      this.chechPassword = this.registerForm.controls['password'].value == this.registerForm.controls['confirmPassword'].value;
    }
    return this.registerForm.controls;
  }

  //from CanRegisterDeactivate to call this method in guard
  isConfirmLeave(){
    return  this.registerForm.dirty
  }

  passwordChange(){
    let pass = this.registerForm.controls['password'].value;

    this.checkPassLowerCase = pass.match(/[a-z]+/g) ? true : false ;
    this.checkPassUpperCase = pass.match(/[A-Z]+/g) ? true : false ;
    this.checkPassNum = pass.match(/\d+/g) ? true : false ;
    this.checkPassLength = pass.match(/.{8,}/g) ? true : false ;
  }
}
