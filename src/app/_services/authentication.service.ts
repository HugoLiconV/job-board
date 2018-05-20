import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
// import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(username + ':' + password)
        })
      };
      const encoded_data = JSON.stringify({'access_token': environment.ACCESS_TOKEN});
      return this.http.post<any>(
        `${environment.API_URL}/auth`,
        encoded_data,
        httpOptions
      )
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
