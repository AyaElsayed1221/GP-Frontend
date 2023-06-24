import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''



    
  };

  constructor( private loginservice:LoginserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("submitted")
    if (this.loginData.username.trim()== '' || this.loginData.username==null)
    {
      swal.fire('please Fill The Form!!','','question');
      return;
    }

    if (this.loginData.password.trim()== '' || this.loginData.password==null)
    {
      swal.fire('please Fill The Form!!','','question');
      return;
    }

   //request to server to generate token
     this.loginservice.generateToken(this.loginData).subscribe(
      (data:any)=>{console.log("Success");
    console.log(data); 


    //login
    this.loginservice.loginUser(data.token);
    this.loginservice.getCurrentUser().subscribe(
      (user:any)=>{
        this.loginservice.setUser(user);
        console.log(user);
        //redirect ...admin:admin-dashboard
        //redirect ...normal:normal-dashboard
         if (this.loginservice.getUserRole()=="ROLE_ADMIN")
         {
          //ADMIN DASHBOARD
         //window.location.href='/admin';
         this.router.navigate(['admin']);
         this.loginservice.loginStatusSubject.next(true);


         }else if(this.loginservice.getUserRole()=="ROLE_PATIENT")
         {
                //NORMAL USER DASHBOARD
               //window.location.href='/user-dashboard';
               this.router.navigate(['user-dashboard']);
               this.loginservice.loginStatusSubject.next(true)
         }else {
          this.loginservice.logout();
          
         }


      }
      
    );
  },
  (error)=>{
    console.log('Error !!');
    console.log(error);
    swal.fire('Invalid Details !! Try again ','','warning')
  }
     );




  }
}
