import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pokemon } from './../../../modelo/pokemon'


@Injectable()
export class PaginaPokemonService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  public resultado!: Pokemon;

  constructor(
    private client: HttpClient
  ) { }

  public datosPokemon(nombre: String){
    console.log(this.url + '/' + nombre)
    this.client.get<Pokemon>(this.url + '/' + nombre)
      .subscribe(peticion => {
        this.resultado = peticion
      });

  }



}
