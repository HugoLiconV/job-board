import { Component, OnInit } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Opening } from '../_models';
import { Router } from '@angular/router';
import { UserService, AlertService, OpeningService } from '../_services';

@Component({
  selector: 'app-opening-form',
  templateUrl: './opening-form.component.html',
  styleUrls: ['./opening-form.component.css']
})
export class OpeningFormComponent implements OnInit {

  model: any = {};
  loading = false;

  myControl: FormControl = new FormControl();

  careers = [
    'Ingeniería en Informática',
    'Ingeniería en Diseño Industrial',
    'Ingeniería en Gestión Empresarial',
    'Ingeniería en Industrial',
    'Ingeniería en Sistemas Computacionales',
    'Arquitectura',
    'Licenciatura en administración'
  ];

  selectedCareers: string[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.selectedCareers.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(career: any): void {
    const index = this.selectedCareers.indexOf(career);

    if (index >= 0) {
      this.selectedCareers.splice(index, 1);
    }
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private openingService: OpeningService
  ) { }

  ngOnInit() {
    this.selectedCareers = [''];
    this.selectedCareers.pop();
  }

  createOpening() {
    this.loading = true;

    const opening: Opening = {
      title: this.model.title,
      salary: this.model.salary,
      carreer: this.selectedCareers,
      description: this.model.description,
      location: {
        city: this.model.city,
        state: this.model.state
      }
    };

    this.openingService.create(opening)
    .subscribe(
      data => {
        this.alertService.success('Opening created');
        this.router.navigate(['home']);
      },
      error => {
        this.alertService.error(error.message);
        this.loading = false;
      }
    );
  }
}
