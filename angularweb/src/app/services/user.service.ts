import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
