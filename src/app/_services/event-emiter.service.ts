import {Injectable, EventEmitter} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EventEmiterService {
  private messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  changeMessage(message: boolean) {
    this.messageSource.next(message);
  }

}
