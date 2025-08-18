import { Injectable } from '@angular/core';
import { Funcionario } from '../model/funcionario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

    private apiUrlFuncionario = 'http://localhost:8080/api/v1/funcionario';
    //private apiUrlUsuario = 'http://localhost:8080/api/v1/usuario';
  
    constructor(private http: HttpClient) { }
  
    salvar(funcionario: Funcionario): Observable<Funcionario> {
      if (funcionario.idFuncionario === 0) {
        // Criar nova funcionario (POST) 
        return this.http.post<Funcionario>(this.apiUrlFuncionario, funcionario);
      } else {
        // Atualizar funcionario existente (PUT) 
        return this.http.put<Funcionario>(`${this.apiUrlFuncionario}/${funcionario.idFuncionario}`, funcionario);
      }
    }
  
    listar(): Observable<Funcionario[]> {
      return this.http.get<Funcionario[]>(this.apiUrlFuncionario);
    }
  
    buscarPorId(id: number): Observable<Funcionario> {
      return this.http.get<Funcionario>(`${this.apiUrlFuncionario}/${id}`);
    }
  
    excluir(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrlFuncionario}/${id}`);
    }

}
