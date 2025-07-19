import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'https://api-odinstore.odiloncorrea.com/usuarios';

  constructor(private http: HttpClient) { }

  autenticar(login: String, senha: String): Observable<Usuario> {

    const objetoJS = {
      login: login,
      senha: senha
    };

    const objetoJson = JSON.stringify(objetoJS);

    const apiUrlTemp = this.apiUrl + "/auth"

    return this.http.post<Usuario>(apiUrlTemp, objetoJson);
  }

  //localStorage
  carregar(): Usuario {
    let usuario = JSON.parse(localStorage.getItem('usuarioAutenticado') || '{}');
    return usuario;
  }

  //localStorage
  registrar(usuario: Usuario) {
    localStorage.setItem('usuarioAutenticado', JSON.stringify(usuario));
  }

  //localStorage
  encerrar() {
    localStorage.removeItem('usuarioAutenticado');
  }  

}

