import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs'
import { UserService } from '../user/user.service';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt'
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private prismaService: PrismaService,
        private jwtService: JwtService
    ) { }

    async signup(createUserDto: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 12)
        createUserDto.password = hashedPassword

        const user = await this.userService.create(createUserDto)

        return user;
    }

    async validateUser(email: string, password: string) {

        try {
            
            const user = await this.userService.findByEmail(email)
            
            if (!await bcrypt.compare(password, user.password)) {
                // throw new UnauthorizedException({message: 'Invalid credentials'})
                return null;
            }

            return user
        } catch (err) {
            return new HttpException('error login', HttpStatus.BAD_REQUEST)
        }
    }

    async login(user: User){
        const payload = {email: user.email, sub: user.id}

        return{
            access_token: this.jwtService.sign(payload)
        }
    }
}
