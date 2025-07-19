//colocar abstract para que não seja possível instanciar a classe Usuario
export class Usuario {
    protected idUsuario: number;
    protected nome: string;
    protected email: string;
    protected senha: string;

    constructor() {
        this.idUsuario = 0;
        this.nome = '';
        this.email = '';
        this.senha = '';
    }
}
