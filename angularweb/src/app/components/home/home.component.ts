import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/UserModel';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  miFormulario: FormGroup;

  constructor(private userServices: UserService, private fb:FormBuilder) { 

  }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
    });
  }

  onSubmit(formValue: any) {
    debugger;
    const user = new User();
    user.nombre = formValue.nombre;
    user.apellido = formValue.apellido;
    user.email = formValue.email;

    this.userServices.addUser(user);
  }

}
