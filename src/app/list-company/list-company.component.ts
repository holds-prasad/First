import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../company.service'
@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  constructor(private company:CompanyService) { }
  collect={};
  ngOnInit(): void {
  
      this.company.getlist().subscribe((result)=>{

        console.warn(result)
        this.collect=result
      })
    

  }

}
