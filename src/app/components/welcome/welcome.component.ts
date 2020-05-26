import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  token:any;
  constructor(public myRoute: Router) { 

  }
  ngOnInit(): void {

    this.token  =  localStorage.getItem('token');

  }

  dologout(){
    localStorage.clear();
    this.myRoute.navigateByUrl('/');
  }
}
