import { Controller, Get } from "@nestjs/common";
import { iPelicula } from "src/module/Peliculas.module";
import { PeliculaService } from "src/service/pelicula.service";

@Controller('/peliculas')
export class PeliculaController {
  constructor(private readonly peliculaService: PeliculaService){}

  @Get()
  getPeliculas(): iPelicula[] {
    return this.peliculaService.getPeliculas();
  }
}