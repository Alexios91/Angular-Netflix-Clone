export class RegisterDto {
    email: string;
    password: string;
    nome: string;

    constructor(e: string = "", p: string = "", n: string = "") {
        this.email = e;
        this.nome = n;
        this.password = p;
    }
}

export interface LoginDto {
    email: string;
    password: string;
}

export interface ContattaDto {
    nome: string;
    cognome: string;
    email: string;
    password: string;
    privacy: string;
}

export interface User {
    email: string;
    id: number;
    nome: string;
}

export interface LoggedUser {
    user: User;
    accessToken: string;
}