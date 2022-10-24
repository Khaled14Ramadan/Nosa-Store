import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
// import { RegisterPageComponent } from '../auth/register-page/register-page.component';
import { PopUpService } from '../services/pop-up.service';
import { PopUpComponent } from '../shared/pop-up/pop-up.component';
import { CanRegisterDeactivate } from './../interfaces/can-register-deactivate';



@Injectable({
  providedIn: 'root'
})
export class ConfirmRegisterGuard implements CanDeactivate<CanRegisterDeactivate> {
  
  constructor(private _modalService: NgbModal,
    private popUpService:PopUpService,){}


  canDeactivate(component: CanRegisterDeactivate)
  :Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(component.isConfirmLeave()){
      this.popUpService.setPopUpState('form');
      let f = this._modalService.open(PopUpComponent);
      //the closed is return oservable confirm
      return f.closed;
    }
    return true;
  }
  
}
