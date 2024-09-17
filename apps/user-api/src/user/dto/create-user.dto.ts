import { IsString, Length, IsEmail } from 'class-validator'


export class CreateUserDto {
    @IsString()
    @Length(1, 50)
    fullName: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    // @IsString()
    // refresh_token: string;


}
