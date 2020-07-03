import { Component, OnInit } from '@angular/core';
import { PracticaService } from 'src/app/services/practica.service';
import { LoadingScreenService } from 'src/app/services/loading-screen.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  practicas : any[] = [];

  constructor(private loading: LoadingScreenService,private practica: PracticaService) { }

  ngOnInit(): void {
    this.loading.startLoading();
    this.practicas = this.practica.getPractica();
    console.log(this.practicas);
    this.loading.stopLoading();
  }



}
