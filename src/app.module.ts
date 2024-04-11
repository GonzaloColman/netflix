import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculaController } from './controllers/pelicula.controller';
import { PeliculaService } from './service/pelicula.service';
import { JwtModule } from '@nestjs/jwt';// npm install @nestjs/jwt bcryptjs

@Module({
  imports: [
    JwtModule.register({
      secret: 'clave secreta',
      signOptions: { expiresIn: '1h'},
    }),
  ],
  controllers: [AppController, PeliculaController],
  providers: [AppService, PeliculaService],
})
export class AppModule {}
