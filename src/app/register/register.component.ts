import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  profileKind = [
    'Student',
    'Company',
  ];

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    const user: User = {
      // email: 'hugo2@example.com',
      // password:  '123456',
      // kind:  'company',
      // name:  'Hugo',
      // phone:  '6141816618',
      // address: {
      //   city:  'Aldama',
      //   state:  'Chihuahua',
      // },
      // picture: ''
      email: this.model.email,
      password:  this.model.password,
      kind:  this.model.kind,
      name:  this.model.name,
      phone:  this.model.phone,
      address: {
        city:  this.model.city,
        state:  this.model.state,
      },
      picture: ''
    };
    // console.log(user);
    this.userService.create(user)
    .subscribe(
      data => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error.message);
        this.loading = false;
    });
  }
}
