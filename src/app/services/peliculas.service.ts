import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map


@Injectable()
export class PeliculasService {

  private apikey:string = "1e27f63546b40c7c8a473a7dae5443a6";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private jsonp:Jsonp ) { }

  //Obtener peliculas para niños - What are the most popular kids movies?


  //Obtener peliculas de la cartelera - What movies are in theatres?
  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate ( hasta.getDate() + 7 )

    // +1 porque en Javascript vienen en base cero
    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDay() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDay() }`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());

  }

  //Obtener peliculas populares - What are the most popular movies?
  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

}
