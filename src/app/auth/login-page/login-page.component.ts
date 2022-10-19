import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private state:LoginServiceService,
    private router:Router,
    ) { }

  ngOnInit(): void {
  }

  handleSubmit(f: any){
    console.log(f);
    this.state.setStateLogin(true);
    this.router.navigate([''])
  }

}
