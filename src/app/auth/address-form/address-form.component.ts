import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  formAddress:FormGroup ;

  constructor(private fb : FormBuilder) {
    this.formAddress = this.fb.group({
      address : this.fb.array([])
    })
   }

  ngOnInit(): void {
  }

  //for can used formArray method push&pop ......
  get address():FormArray{
    return this.formAddress.controls['address'] as FormArray ;
  }

  addAddress(){
    const addressFormItem = this.fb.group({
      addressName:['' ,[ Validators.required , Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      street:['',[ Validators.required , Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      country:['',[ Validators.required , Validators.pattern(/^[a-zA-Z]*$/)]],
      city:['',[ Validators.required , Validators.pattern(/^[a-zA-Z]*$/)]],
    });
    this.address.push(addressFormItem);
    console.log(this.address);
  }

  deleteForm(d:any){
    console.log(d);
    this.address.removeAt(d);
  }

}
