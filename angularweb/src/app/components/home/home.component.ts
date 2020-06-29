import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/UserModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userServices: UserService) { 
    console.log(this.userServices.getUserName())

    const user = new User();
    user.nombre = 'Junior';
    user.apellido = 'Wong';
    user.email = 'fcolanw@gmail.com';
    
    this.userServices.addUser(user)
  }

  ngOnInit(): void {
  }

}
