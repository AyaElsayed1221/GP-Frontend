import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Profileclass } from 'src/app/classes/profileclass';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  selectedFW = new FormControl();
  frameworks: string[] = ['رمد', 'باطنية و الغدد الصماء ', 'أذن، أنف، حنجرة ', 'جلدية ']

  info: Profileclass[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
