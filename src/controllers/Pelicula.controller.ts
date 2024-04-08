import { Body, Controller, Delete, Get, Param, Patch } from "@nestjs/common";
import { iPelicula } from "src/module/Peliculas.module";
import { PeliculaService } from "src/service/pelicula.service";

@Controller('/peliculas')
export class PeliculaController {
  constructor(private readonly peliculaService: PeliculaService) { }

  @Get('/:id')
  getPeliculas(): iPelicula[] {
    return this.peliculaService.getPeliculas();
  }


  @Delete('/:id')
  deletePeliculasById(@Param() params: any): iPelicula[] {
    const { id } = params;
    try {
      console.log(id);
      return this.peliculaService.deletePeliculaById(id);
    }catch (error) {
      console.log(error);
    }
  }

  @Patch('/:id')
  actualizarPelicula(@Param() params: any, @Body() peliDTO: iPelicula): iPelicula{
    const { id } = params;
    return this.peliculaService.actualizarPelicula(id, peliDTO)
  }

}