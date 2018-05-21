import { Component, OnInit } from '@angular/core';
import { EventEmiterService } from '../_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private _eventEmitter: EventEmiterService) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isLoggedIn = currentUser && currentUser.token ? true : false;
    console.log(`is logged in? ${this.isLoggedIn}`);
   }

  ngOnInit() {
    this._eventEmitter.currentMessage.subscribe(message => this.isLoggedIn = message);
  }

}
