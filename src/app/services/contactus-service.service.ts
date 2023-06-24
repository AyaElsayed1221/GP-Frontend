import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contactus } from '../classes/contactus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusServiceService {

  constructor(private httpCLient:HttpClient) { }

  contactus(contact: Contactus):Observable<object>
    {console.log(contact)
      return this.httpCLient.post("http://localhost:8080/contacts/contact-us",contact);

     
      
    }
  

}
