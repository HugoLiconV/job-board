import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService, EventEmiterService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  isLoggedIn;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private _eventEmitter: EventEmiterService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.isLoggedIn = false;
    this.change.emit(this.isLoggedIn);
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this._eventEmitter.changeMessage(false);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  login(email: string, password: string) {
    console.log(`email: ${email} pass: ${password}`);
    this.loading = true;
    this.authenticationService.login(email, password)
    .subscribe(
      data => {
        this.isLoggedIn = true;
        this.change.emit(this.isLoggedIn);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error.message);
        this.loading = false;
      });
  }

}
