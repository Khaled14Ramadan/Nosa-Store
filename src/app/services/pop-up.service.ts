import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  private popUpStat = new BehaviorSubject('');
  popUpState = this.popUpStat.asObservable();

  constructor() { }

  // for change contant in popUp
  setPopUpState(v:string){
    this.popUpStat.next(v);
  }

}
