import { Usuario } from './usuario';

export class Funcionario extends Usuario {

    private idFuncionario: number;

    constructor() {
        super();
        this.idFuncionario = 0;
    }
}
