import { Component, OnInit } from '@angular/core';

import { UserserviceService } from 'src/app/services/userservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {




  constructor(private userservice:UserserviceService , private snack:MatSnackBar) { }

  public user = {
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    authorityName: '',
    relationName: '',
 
    relativeType: '',
 
    relativeEmail: '',
 
    relativePhone: '',
 
    city: '',
 
    street: '',
 
    apartmentNo: ''

  };


  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.user);
    if ( this.user.firstName == ''  || this.user.firstName == null) 
      {
        swal.fire('please Fill The Form!!','','question')
        //this.snack.open("user first name is required !!" , 'ok',{duration:3000, verticalPosition:'top'});
      //alert('Please fill the required data !');
      return;
    }
    

    //adduser: userservice
    this.userservice.adduser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        swal.fire('success','user id is'+ '','success')
    
      },
      (error)=>{
        //error
        console.log(error);
        swal.fire('somthing went wrong','','warning')
      }
      );



  }
}
