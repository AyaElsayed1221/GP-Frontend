import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profileclass } from '../classes/profileclass';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {
 

  constructor(private httpCLient:HttpClient) { }


  url: string ="http://localhost:8080/patients/"
  getmedicine(patientId:number){
  
    return this.httpCLient.get(`${this.url}${patientId}`);
  }



}
