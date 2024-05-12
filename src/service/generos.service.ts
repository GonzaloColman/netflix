import { Body, Controller, Post } from '@nestjs/common';
import Genero from 'src/module/genero.dto';

@Injectable()
export class GenerosService {
  crearGenero(genero: Genero):Genero{
    return genero;
  }
}