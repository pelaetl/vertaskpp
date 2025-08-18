import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/model/tarefa';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TarefaService } from 'src/app/services/tarefa.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';

import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-administrador',
  templateUrl: './inicio-administrador.page.html',
  styleUrls: ['./inicio-administrador.page.scss'],
  standalone: false
})
export class InicioAdministradorPage implements OnInit {

  tarefas: Tarefa[];
  administrador: Usuario;

  constructor(private popoverController: PopoverController, private tarefaService: TarefaService, private router: Router, private toastController: ToastController, private alertController: AlertController, private usuarioService: UsuarioService) {
    this.tarefas = [],
      this.administrador = new Usuario();
  }

  ngOnInit() {
    this.usuarioService.currentUser$.subscribe(u => {
      if (u) this.administrador = u;
    });

    this.tarefas = this.tarefaService.listar();
  }

  ionViewWillEnter() {
    this.tarefas = this.tarefaService.listar();
  }

  ionViewWillLeave() {
    this.popoverAberto = false;
  }

  async excluir(tarefa: Tarefa) {

    const alert = await this.alertController.create({
      header: 'Confirma a exclusão',
      message: tarefa.descricao,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            this.tarefaService.excluir(tarefa.idTarefa);
            this.tarefas = this.tarefaService.listar();
            this.exibirMensagem('Registro excluído com sucesso!!!');
          }
        }
      ]
    })
    await alert.present()
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present()
  }

  definirCor(tarefa: Tarefa): string {
    return new Date(tarefa.dataEntrega) > new Date() ? 'red-text' : 'green-text';
  }

  selectedDate: string = ''; // ou o tipo correto
  onDateChange(event: any) {
    // lógica para tratar mudança de data
  }

  popoverAberto = false;
  popoverEvento: any;

  abrirPerfil(ev: any) {
    this.popoverEvento = ev;
    this.popoverAberto = true;
  }

  editarPerfil() {

  }

  sair() {
    // Fecha o popover primeiro
    this.popoverController.dismiss().then(() => {
      // Depois navega
      this.router.navigate(['/login']);
    });
  }

}



