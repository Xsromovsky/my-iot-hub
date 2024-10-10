import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt'



export  async function generateAccessToken(user: User): Promise<JwtService> {
  const payload = { email: user.email, sub: user.id };
  return await this.jwtService.sign(payload, {
    secret: process.env.JWT_SECRET,
    expiresIn: '1d',
  });
}

export async function generateRefreshToken(user: User): Promise<JwtService> {
  const payload = { email: user.email, sub: user.id };
  return await this.jwtService.sign(payload, {
    secret: process.env.JWT_REFRESH_SECRET,
    expiresIn: '7d',
  });
}
