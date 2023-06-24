import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Contactus } from 'src/app/classes/contactus';
import { ContactusServiceService } from 'src/app/services/contactus-service.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  data={
   
    TicketId:'',
    name:'',
    email:'',
    message:'',
    phone:'',
  
  
  
  };




 contact: Contactus = new Contactus();
  constructor(private contactservice:ContactusServiceService,private http: HttpClient) { }
  
  ngOnInit(): void {
  }
  contactUs()
  {
    console.log(this.contact);


    this.contactservice.contactus(this.contact).subscribe( (data:any)=>{
      //success
      console.log(data);
      swal.fire('Thank you for cotacting us ','','success') },

    (error)=>{
      //error
      console.log(error);
    
    });

  
 

 

}  


}
