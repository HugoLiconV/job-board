import { Component, OnInit } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { FormControl } from '@angular/forms';

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

  selectedCareers = [];

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

  constructor() { }

  ngOnInit() {
  }

}
