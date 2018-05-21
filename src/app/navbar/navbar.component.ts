import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;


  constructor() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isLoggedIn = currentUser && currentUser.token ? true : false;
    console.log(`is logged in? ${this.isLoggedIn}`);
   }

  ngOnInit() {
  }

}
