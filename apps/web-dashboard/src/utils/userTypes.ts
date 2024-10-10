export type User = {
    id: string;
    name: string;
    email: string;

}

export type UserLogin = {
    email: string;
    password: string;
}

export type LoginResponse = {
    access_token: string;
    refresh_token: string;
}