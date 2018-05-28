import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Opening } from '../_models';

@Injectable()
export class OpeningService {
  private url = `${environment.API_URL}/openings`;

  constructor(private http: HttpClient) { }

  getMyOpenings() {
    return this.http.get(`${this.url}/my-openings`);
  }

  create(opening: Opening) {
    console.log(opening);
    return this.http.post(this.url, opening);
  }
}
