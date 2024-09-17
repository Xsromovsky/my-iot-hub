import { env } from "process";

export function generateAccessToken(userId: string){
    const secretKey = process.env.SECRET_KEY
    
    return null
}

export function generateRefreshToken(userId: string){
    const refreshSecretKey = process.env.REFRESH_SECRET_KEY
    return null
}