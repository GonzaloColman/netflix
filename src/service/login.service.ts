import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService) { }

  validateUser(username: string, password: string): boolean {
    if (username === 'Gonzalo' && password === 'Gonzalo') {
      return true;
    }
    return false;
  }

  login(user: any) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}


