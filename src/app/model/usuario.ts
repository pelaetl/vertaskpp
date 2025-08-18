//colocar abstract para que não seja possível instanciar a classe Usuario
export class Usuario {
     idUsuario: number;
     nome: string;
     email: string;
     senha: string;

    constructor() {
        this.idUsuario = 0;
        this.nome = '';
        this.email = '';
        this.senha = '';
    }
}
