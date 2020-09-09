import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url="http://localhost:3000/company";
  constructor(private http:HttpClient) { }
  getlist()
  {
    return this.http.get(this.url)
  }
  saveData(data)
  {
      return this.http.post(this.url,data)

  }
}
