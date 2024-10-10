import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import  { ExtractJwt, Strategy } from 'passport-jwt'
import { Request } from 'express';
import { JwtPayloadWithRt } from "../types/JwtPayloadWithRt.type";

type JwtPayload = {
    email: string;
    sub: string;
  };

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_REFRESH_SECRET,
            passReqToCallback: true,

        })
    }

    validate(req: Request, payload: JwtPayload){
        // console.log('refresh strategy here');

        // console.log(req.headers.authorization);
        const authorization = req.headers.authorization
        if(!authorization){
            throw new UnauthorizedException('Authorization header is required')
        }
        
        const refreshToken = authorization.replace('Bearer', '').trim()
        
        return { ...payload, refreshToken };
    
    }
}