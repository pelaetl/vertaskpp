import { Usuario } from './usuario';
export class Administrador extends Usuario {
    private idAdministrador: number;

    constructor() {
        super(); 
        this.idAdministrador = 0;
    }
}
