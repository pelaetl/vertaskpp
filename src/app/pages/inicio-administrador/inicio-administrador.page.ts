import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-administrador',
  templateUrl: './inicio-administrador.page.html',
  styleUrls: ['./inicio-administrador.page.scss'],
  standalone: false
})
export class InicioAdministradorPage implements OnInit {

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
