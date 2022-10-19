import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading!:Observable<boolean> ;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit():void{
    // this.loaderService.stateLoading.subscribe((val)=>{
    //   this.isLoading = val;
    // });
    this.isLoading = this.loaderService.stateLoading;
  }

}
