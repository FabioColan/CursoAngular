import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticaService {

  constructor() { }

  getPractica() {
    let lista = [
      {
        id:1,
        nombre: "Examen1",
        descripcion: "Descripción del examen"
      },
      {
        id:2,
        nombre: "Examen2",
        descripcion: "Descripción del examen"
      },
      {
        id:3,
        nombre: "Examen3",
        descripcion: "Descripción del examen"
      },
      {
        id:4,
        nombre: "Examen4",
        descripcion: "Descripción del examen"
      },
      {
        id:5,
        nombre: "Examen5",
        descripcion: "Descripción del examen"
      },
    ]

    return lista;
  }
}
