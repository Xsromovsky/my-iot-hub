import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs'
import { UserService } from '../user/user.service';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt'
import { User } from '../user/entities/user.entity';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { generateAccessToken, generateRefreshToken } from './jwtGenerator'
import { Tokens } from '../types/tokens.type';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private prismaService: PrismaService,
        private jwtService: JwtService,

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
            throw new BadRequestException('User does not exist');
        }
    }


    async login(user: User) {
        const tokens = await this.generateTokens(user);

        const updateUserDto: UpdateUserDto = {
            refresh_token: tokens.refresh_token
        }
        // save refresh token to db
        await this.userService.update(user.id, updateUserDto)
        // await this.updateUserinDB(user)
        return {
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token
        }


    }

    // async updateUserinDB(user: User) {
    //     try {
    //         const updateUserDto: UpdateUserDto = user

    //         await this.userService.update(user.id, updateUserDto)
    //     } catch (error) {
    //         throw new BadRequestException('error updating user')
    //     }
    // }

    async generateTokens(user: User): Promise<Tokens> {
        const payload = { email: user.email, sub: user.id }
        const refresh_token = this.jwtService.sign(payload, { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '7d' })
        const access_token = this.jwtService.sign(payload, { secret: process.env.JWT_SECRET, expiresIn: '1d' })
        return {
            refresh_token,
            access_token
        }
    }

    async refreshToken(userId: string, refreshToken: string) {
        try {
            const user = await this.userService.findByIdAndRt(userId, refreshToken)
            if (!user) {
                throw new UnauthorizedException('Invalid refresh token or userId')
            }

            const tokens = await this.generateTokens(user)

            const updateUserDto: UpdateUserDto = {
                refresh_token: tokens.refresh_token
            }
            // save refresh token to db
            await this.userService.update(user.id, updateUserDto)

            // user.refresh_token = tokens.refresh_token
            // await this.updateUserinDB(user)

            return tokens
        } catch (error) {
            throw new BadRequestException('Invalid refresh token or userId')
        }

    }

}

