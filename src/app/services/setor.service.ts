import { Injectable } from '@angular/core';
import { Setor } from '../model/setor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  private apiUrl = 'http://localhost:8080/api/v1/setor';

  constructor(private http: HttpClient) { }

  salvar(setor: Setor): Observable<Setor> {
    if (setor.idSetor === 0) {
      // Criar nova setor (POST) 
      return this.http.post<Setor>(this.apiUrl, setor);
    } else {
      // Atualizar setor existente (PUT) 
      return this.http.put<Setor>(`${this.apiUrl}/${setor.idSetor}`, setor);
    }
  }

  listar(): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Setor> {
    return this.http.get<Setor>(`${this.apiUrl}/${id}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  existeSetorComNome(nome: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/existe?nome=${nome}`);
  }

}

