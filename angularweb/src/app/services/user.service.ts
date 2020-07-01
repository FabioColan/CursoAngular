import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../models/UserModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _apiUrl;
  
  constructor(private http: HttpClient) { 
    this._apiUrl = environment.apiendpoint;
  }

  getUserName() {
    this.http.get(this._apiUrl + '/api/User/1212')
      .subscribe(resp => {
        console.log(resp);
      });
    return 'Fabio';
  }

  addUser(user: User) {
    this.http.post(this._apiUrl + '/api/User/adduser', user)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  getUsers() {
    return this.http.get(this._apiUrl + '/api/User/users');
  }
}
