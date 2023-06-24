import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lost } from '../classes/lost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LostserviceService {
  
  constructor(private httpCLient:HttpClient) { }

  lostservicefunction(lostc: Lost):Observable<object>
  {console.log(lostc)
    return this.httpCLient.post("http://localhost:8080/losts/lost-card-patient-view",lostc); 
    
  }


}
