import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {

 constructor(private http: HttpClient) { }

 create(user: User) {
    const url = `${environment.API_URL}/users`;
    const master_token = {'access_token': environment.ACCESS_TOKEN};
    const data = Object.assign(master_token, user);
    console.log(master_token);
    console.log(data);
    // const encoded_data = JSON.stringify({'access_token': environment.ACCESS_TOKEN});
    return this.http.post(url, data);
  }
}

// doPOST() {
//   this.http.post(url, {moo:"foo",goo:"loo"}).subscribe(res => console.log(res.json()));
// }
