import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/UserModel';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoadingScreenService } from 'src/app/services/loading-screen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  miFormulario: FormGroup;
  flag = false;
  users : any[] = [];

  constructor(
    private userService: UserService, 
    private fb:FormBuilder, 
    private toastr: ToastrService, 
    private screenService: LoadingScreenService
    ) { 

  }

  ngOnInit(): void {
    
    this.miFormulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      date: [''],
      telefonos: this.fb.array([this.fb.group({telefono: ['']})])
    });
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  onSubmit(formValue: any) {
    // debugger;
    this.screenService.startLoading();
    this.showSuccess();
    const user = new User();
    user.nombre = formValue.nombre;
    user.apellido = formValue.apellido;
    user.email = formValue.email;
    user.date = new Date(formValue.date.year, formValue.date.month, formValue.date.day)
    user.telefonos = formValue.telefonos;

    this.userService.addUser(user);

    this.flag = !this.flag;

    this.userService.getUsers()
      .subscribe((resp:any) => {
        this.users = resp;
        this.screenService.stopLoading();
      });
  }

  get getTelefonos() {
    return this.miFormulario.get('telefonos') as FormArray;
  }

  addTelefonos(){
    const control = <FormArray>this.miFormulario.controls['telefonos'];
    control.push(this.fb.group({telefono: []}))
  }

  removeTelefono(index: number){
    const control = <FormArray>this.miFormulario.controls['telefonos'];
    control.removeAt(index);
  }

}
