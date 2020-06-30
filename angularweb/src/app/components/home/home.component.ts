import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/UserModel';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  miFormulario: FormGroup;
  flag = false;
  users : any[] = [];

  constructor(private userService: UserService, private fb:FormBuilder) { 

  }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      date: ['']
    });
  }

  onSubmit(formValue: any) {
    // debugger;
    const user = new User();
    user.nombre = formValue.nombre;
    user.apellido = formValue.apellido;
    user.email = formValue.email;
    user.date = new Date(formValue.date.year, formValue.date.month, formValue.date.day)

    this.userService.addUser(user);

    this.flag = !this.flag;

    this.userService.getUsers()
      .subscribe((resp:any) => {
        this.users = resp;
      });
  }

}
