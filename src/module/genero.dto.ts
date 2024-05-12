import { IsInt, IsString } from 'class-validator';

class Genero {
  @IsInt()
  generoid: number;

  @IsString()
  nombre: string;
}

export default Genero;