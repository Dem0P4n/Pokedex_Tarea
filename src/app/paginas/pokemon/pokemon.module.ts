import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule } from './pokemon-routing.module';

import { PokemonPage } from './pokemon.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaginaPokemonService } from './servicios/pagina-pokemon.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PokemonPage],
  providers: [
    PaginaPokemonService
  ]
})
export class PokemonPageModule {}
