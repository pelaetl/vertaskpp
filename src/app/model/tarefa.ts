import {Usuario} from './usuario';
export class Tarefa {

    idTarefa: number;
    titulo: string;
    descricao: string;
    dataInicio: Date;
    dataEntrega: Date;
    usuarios: Usuario[];


    constructor() {
        this.idTarefa = 0;
        this.titulo = '';
        this.descricao = '';
        this.dataInicio = new Date();
        this.dataEntrega = new Date();
        this.usuarios = [];
    }
}
