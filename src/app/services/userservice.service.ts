import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpClient) { }

  //add user

  public adduser(user: any)
  {
   return this.http.post("http://localhost:8080/api/auth/patient-signup",user);
  }
}
