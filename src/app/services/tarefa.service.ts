import { Injectable } from '@angular/core';
import {Tarefa} from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

   salvar(tarefa: Tarefa): Tarefa{
      let tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
      if(tarefa.idTarefa === 0){
        tarefa.idTarefa = (new Date().getTime() / 1000) * Math.random(); //Gera um ID aleatório.
        tarefas.push(tarefa);
      }else{
        let posicao = tarefas.findIndex((temp: Tarefa) => temp.idTarefa === tarefa.idTarefa);
        tarefas[posicao] =  tarefa;
      }
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      return tarefa;
    }
  
    listar(): Tarefa[]{
      let tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
      return tarefas;
    }
  
    buscarPorId(id: number): Tarefa{
      let tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
      let tarefa = new Tarefa();
      tarefa = tarefas.find((temp: Tarefa) => temp.idTarefa === id);
      return tarefa;
    }
  
    excluir(id: number): boolean{
      let tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
      tarefas = tarefas.filter((temp: Tarefa) => temp.idTarefa !== id);
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      return true;
    }
}

