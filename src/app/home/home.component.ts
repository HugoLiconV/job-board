import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventEmiterService, UserService, OpeningService } from '../_services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;
  openings;
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
  constructor(
    private _eventEmiter: EventEmiterService,
    private router: Router,
    private userService: UserService,
    private openingService: OpeningService
    ) { }

  ngOnInit() {
    this._eventEmiter.changeMessage(true);
    // this.getMe();
    this.getMyOpenings();
  }

  getMe() {
    this.userService.getMe().subscribe(me => {
      console.log(me);
    }, error => {
      console.log(error);
    });
  }

  getMyOpenings() {
    this.openingService.getMyOpenings().subscribe(openings => {
      this.openings = openings;
      console.log(openings);
    }, error => {
      console.log(error);
    });
  }
}
