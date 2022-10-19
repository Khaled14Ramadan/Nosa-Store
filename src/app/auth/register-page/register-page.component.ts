import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  chechPassword: boolean = true;
  constructor(private router: Router,
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


  canDeactivate(): Observable<boolean> | boolean {
    // console.log(this.registerForm.dirty);
    // to check if register is success or not touchd any input
    if (this.registerForm.valid || !this.registerForm.dirty) {
      return true;
    }
    let confirm = window.confirm("are you sure want leave Registerayin?");
    return confirm;
  }

}
