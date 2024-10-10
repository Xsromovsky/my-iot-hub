import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import  { ExtractJwt, Strategy } from 'passport-jwt'
import { JwtPayload } from "../types/JwtPayload.type";


@Injectable()
export class JwtAccessTokenStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        })
    }

    async validate(payload: JwtPayload){
        console.log(payload);
        
        return {id: payload.sub, email: payload.email}
    }
}