import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import{CompanyService} from '../company.service'
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  
  addcompany=new FormGroup({
    
   // Id: new FormControl(''),
    name: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required)
    

  })
  constructor(private com:CompanyService) { }
  alert:boolean=false
  ngOnInit(): void {


  }
  
  collectcompany()
  {

      console.log(this.addcompany.value)
      return this.com.saveData(this.addcompany.value).subscribe((result)=>{

          console.warn(result)
          this.alert=true

      })
      
  }
  closealert()
  {
      this.alert=false
      this.addcompany.reset({})

  }

}
