import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessTokenStrategy } from './jwt.AccessToken.strategy';
import { JwtRefreshTokenStrategy } from './jwt.RefreshToken.strategy';

//  secret: process.env.JWT_SECRET, signOptions: { expiresIn: '1h' } 
@Module({
  imports: [UserModule,
    PrismaModule,
    PassportModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtAccessTokenStrategy, JwtRefreshTokenStrategy]
})
export class AuthModule { }
