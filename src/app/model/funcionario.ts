import { Usuario } from './usuario';

export class Funcionario extends Usuario {

    private idFuncionario: number;
    private idSetor: number;

    constructor() {
        super();
        this.idFuncionario = 0;
        this.idSetor = 0;
    }
}
