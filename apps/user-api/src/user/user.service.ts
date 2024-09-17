import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Prisma } from '@prisma/client'
import { PrismaService } from '../../prisma/prisma.service'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }


  async create(createUserDto: CreateUserDto) {
    if (!createUserDto.email || !createUserDto.fullName) {
      throw new BadRequestException('Full name and email are required')
    }
    try {
      return await this.prisma.user.create({
        data: createUserDto
      })

    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        throw new HttpException('Email already exists', HttpStatus.CONFLICT);
      }
      throw err;
    }
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: string) {
    try {
      return this.prisma.user.findUnique({
        where: { id }
      })

    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        return new HttpException(`user with id: ${id} not found`, HttpStatus.NOT_FOUND)
      }
    }
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      }
    })

  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto
    })
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    })
  }
}
