import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtAuthRefreshGuard } from './jwt-auth-refresh.guard';
import { Tokens } from '../types/tokens.type';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('/signup')
    async signUp(@Body() createUserDto: CreateUserDto){
        return await this.authService.signup(createUserDto)
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req){
        console.log(JSON.stringify(req.user));
        return this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/test')
    test(@Request() req){
        return req.user
    }

    @UseGuards(JwtAuthRefreshGuard)
    @Get('/refresh-token')
    async refreshToken(@Request() req): Promise<Tokens>{
        // console.log(req.user);
        
        return this.authService.refreshToken(req.user.sub, req.user.refreshToken);
    }
}