import { Component, OnInit } from '@angular/core';
//importar el servicio
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor( public _ps:PeliculasService ) {

    this._ps.getCartelera()
        .subscribe( data => {
          console.log("Home data:", data);
        })

  }

  ngOnInit() {
  }

}
