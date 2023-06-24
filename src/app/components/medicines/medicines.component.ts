import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicineclass } from 'src/app/classes/medicineclass';
import { MedicineserverService } from 'src/app/services/medicineserver.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  medicinelist:Medicineclass[]=[];
  constructor(private medicineservice:MedicineserverService,private route:ActivatedRoute) { }
id:any;
  ngOnInit(): void {
    this.id=console.log(this.route.snapshot.params['id']);
    this.geyone();
    
  }

  geyone(){
  this.medicineservice.getmedicine(this.id).subscribe((data: Medicineclass[])=>{
    console.log(data);
    this.medicinelist=data;});}
}
