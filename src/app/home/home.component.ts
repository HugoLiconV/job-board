import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventEmiterService } from '../_services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private _eventEmiter: EventEmiterService,
    private router: Router
    ) { }

  ngOnInit() {
    this._eventEmiter.changeMessage(true);
  }

  newMessage() {
  }
}
