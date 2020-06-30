import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserName() {
    this.http.get('http://localhost:49185/api/User/1212')
      .subscribe(resp => {
        console.log(resp);
      });
    return 'Fabio';
  }

  addUser(user: User) {
    this.http.post('http://localhost:49185/api/User/adduser', user)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  getUsers() {
    return this.http.get('http://localhost:49185/api/User/users');
  }
}
