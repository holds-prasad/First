import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  reg=new FormGroup({
    
    // Id: new FormControl(''),
     name: new FormControl('',Validators.required),
     Email: new FormControl('',Validators.required),
     Password: new FormControl('',Validators.required)
     
 
   })
   regdata()
  {

      console.log(this.reg.value)
      
      
  }
 get email(){return this.reg.get('Email')}

  ngOnInit(): void {
  }

}
