import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterPageComponent } from '../auth/register-page/register-page.component';
import { CanRegisterDeactivate } from './../interfaces/can-register-deactivate';



@Injectable({
  providedIn: 'root'
})
export class ConfirmRegisterGuard implements CanDeactivate<unknown> {
  canDeactivate(component: CanRegisterDeactivate){
    // currentRoute: ActivatedRouteSnapshot,
    // currentState: RouterStateSnapshot,
    // nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.canDeactivate ? component.canDeactivate() : true;
  }
  
}
