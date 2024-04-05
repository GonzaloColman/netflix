// id, un título, una lista de actores principales, una lista de géneros, una sinopsis, una imagen (URL), su duración, fecha de lanzamiento

export interface iPelicula {
  id: number,
  titulo: string,
  reparto: string[],
  generos: string[],
  sinopsis: string,
  imagen: string,
  duracion: number,
  fechaDeLanzamiento: string,
} 