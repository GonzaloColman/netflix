import { Body, Controller, Post } from '@nestjs/common';
import Genero, { GenerosService } from 'src/service/generos.service';
import { PeliculaService } from 'src/service/pelicula.service';

@Controller('/appi/generos')
export class GenerosController{
  constructor(private readonly generosService: GenerosService) {}
  
  @Post()
  crearGenero(@Body() body: Genero): Genero{
    return this.generosService.crearGenero(body);
  }
}