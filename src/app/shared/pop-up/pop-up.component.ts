import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { PopUpService } from 'src/app/services/pop-up.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  popUpValue: string = '';
  popHeader:string = '';
  popBody:string ='';

  constructor(
    public popUp: NgbActiveModal,
    private popUpService: PopUpService,
    private state: LoginServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.popUpService.popUpState.subscribe((v: string) => this.popUpValue = v);
    if (this.popUpValue == 'logout') {
      this.popHeader="LogOut Page";
      this.popBody="Are you sure want to logout ?";
    }
    else if(this.popUpValue == 'form'){
      this.popHeader="Register page";
      this.popBody="You data will not be saved , Are you sure want to leave Register?";
    }
    else if(this.popUpValue == 'delete'){
      this.popHeader="Cart page";
      this.popBody="Are you sure want to Delete this Product ?";
    }
  }

  clickOk() {
    this.popUp.close(true);
    if (this.popUpValue == 'logout') {
      this.state.setStateLogin(false);
      this.router.navigate(['/login']);
    }
    
     
  }

}
