import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../userdata.service';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  users=[];
  Repos=[];
  constructor(private userdata:UserdataService) { }
  ngOnInit() {
  }
  createUserData(input : HTMLInputElement)
  {   let count:any;
    this.userdata.createUserData(input.value).subscribe(
      response => 
      {
        this.users = response.json();  
      })
    
  }
  createDetails(input)
  { 
      this.userdata.createDetails(input).subscribe(
      response => 
      {
        this.Repos = response.json();  
      })
    }
}
