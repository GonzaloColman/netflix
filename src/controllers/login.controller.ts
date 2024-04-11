import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { LoginService } from 'src/service/login.service';

@Controller('/auth')
export class LoginController {

  constructor(private loginService: LoginService) {}

  @Post('Login')
  async login(@Body() body: {username: string; password: string}) {
    const user = this.loginService.validateUser(body.username, body.password);
    if (!user) {
      throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED);
    }
    return this.loginService.login(user);
  }
}