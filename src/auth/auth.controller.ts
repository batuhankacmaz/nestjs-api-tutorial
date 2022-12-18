import { AuthService } from './auth.service';
import { Request } from 'express';
import { Body, Controller, Post, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: any) {
    console.log({
      dto,
    });
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}

//Video 52.13
