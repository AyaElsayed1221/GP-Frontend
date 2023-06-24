import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profileclass } from 'src/app/classes/profileclass';
import { ProfileserviceService } from 'src/app/services/profileservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  info: Profileclass[]=[];
  patientId=1;
  constructor(private infoservice:ProfileserviceService,private route:ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
   this.infoservice.getmedicine(this.patientId)
   .subscribe( (data:any)=>{
      this.info=data;
      console.log(this.info)
      console.log(data);
    },(error)=>{
      console.log(error);
    });
  }

  
}
