import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private serviceLogin =new BehaviorSubject(false);
  stateLogin = this.serviceLogin.asObservable();

  constructor() { }

  setStateLogin(v:boolean){
    this.serviceLogin.next(v);
  }
}
