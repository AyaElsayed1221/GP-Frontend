import { Component, OnInit } from '@angular/core';
import { Lost } from 'src/app/classes/lost';
import { LostserviceService } from 'src/app/services/lostservice.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-lostcard',
  templateUrl: './lostcard.component.html',
  styleUrls: ['./lostcard.component.css']
})
export class LostcardComponent implements OnInit {
  lostc: Lost = new Lost();
  constructor(private lostservice:LostserviceService) { }

  ngOnInit(): void {
  }
  lost(){
  
    console.log(this.lostc); 
    this.lostservice.lostservicefunction(this.lostc).subscribe(data=>{ swal.fire('Thank you your issue has been submitted ','','success')}
    ,error=>alert("sorry please enter correct required Data"));
    
  }
}
