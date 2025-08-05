import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-funcionario',
  templateUrl: './inicio-funcionario.page.html',
  styleUrls: ['./inicio-funcionario.page.scss'],
  standalone: false
})
export class InicioFuncionarioPage implements OnInit {

  selectedDate: string = new Date().toISOString();
  calendarioStatus: string = 'Não há tarefas para esta data';

  constructor() { }

  ngOnInit() {
  }

  onDateChange(event: any) {
    this.selectedDate = event.detail.value;
    // Aqui você pode adicionar lógica para buscar tarefas da data selecionada
    this.calendarioStatus = 'Não há tarefas para esta data';
  }

}
