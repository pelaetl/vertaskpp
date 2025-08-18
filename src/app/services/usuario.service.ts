import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/v1/usuario';
  private currentUserSubject = new BehaviorSubject<Usuario | null>(null);
  currentUser$: Observable<Usuario | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  autenticar(login: String, senha: String): Observable<Usuario> {
    // backend espera { email, senha }
    const payload = { email: login, senha };
    const apiUrlTemp = `${this.apiUrl}/auth`;
    return this.http.post<Usuario>(apiUrlTemp, payload).pipe(
      tap(user => this.currentUserSubject.next(user))
    );
  }

  // método para setar manualmente (útil ao obter user por outro endpoint)
  setCurrentUser(user: Usuario | null) {
    this.currentUserSubject.next(user);
  }

  // método para obter valor síncrono (opcional)
  getCurrentUserValue(): Usuario | null {
    return this.currentUserSubject.value;
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

