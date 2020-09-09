import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
 login=new FormGroup({
    
    // Id: new FormControl(''),
     Email: new FormControl('',Validators.required),
     Password: new FormControl('',Validators.required)
     
 
   })
   logindata()
   {
 
       console.log(this.login.value)
       
       
   }
   

  ngOnInit(): void {
  }

}
