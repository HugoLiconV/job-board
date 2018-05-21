import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class OpeningService {
  private url = `${environment.API_URL}/openings`;

  constructor(private http: HttpClient) { }

  getMyOpenings() {
    return this.http.get(`${this.url}/my-openings`);
  }
}
