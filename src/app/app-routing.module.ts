import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCompanyComponent} from './add-company/add-company.component';
import {ListCompanyComponent} from './list-company/list-company.component';
import {LoginComponent} from './login/login.component'
import {RegistrationComponent} from './registration/registration.component'
import{HomeComponent} from './home/home.component'
import{UpdateCompanyComponent} from './update-company/update-company.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    component: HomeComponent,
    path:'Home'
  
   },
  {
  component: AddCompanyComponent,
  path:'Add'

 },
 {
  component: ListCompanyComponent,
  path:'List'
  
 },
 {
  component: LoginComponent,
  path:'Login'
  
 },
 {
  component: RegistrationComponent,
  path:'Registration'
  
 },{
  component: UpdateCompanyComponent,
  path:'Update'
  
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
