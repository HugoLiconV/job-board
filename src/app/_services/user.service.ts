import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
  private url = `${environment.API_URL}/users`;

  constructor(private http: HttpClient) { }

  create(user: User) {
    // const url = `${this.url}/users`;
    const master_token = {'access_token': environment.ACCESS_TOKEN};
    const data = Object.assign(master_token, user);
    // const encoded_data = JSON.stringify({'access_token': environment.ACCESS_TOKEN});
    return this.http.post(this.url, data);
  }

  getMe() {
    return this.http.get(`${this.url}/me`);
  }

}
