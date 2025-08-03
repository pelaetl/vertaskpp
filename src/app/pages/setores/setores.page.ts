import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/model/setor';
import { SetorService } from 'src/app/services/setor.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.page.html',
  styleUrls: ['./setores.page.scss'],
  standalone: false
})
export class SetoresPage implements OnInit {

  setores: Setor[];
  new: any;

  constructor(private setorService: SetorService, private toastController: ToastController, private alertController: AlertController) {
    this.setores = []
  }

  ngOnInit() {
    this.carregarSetores();
  }

  ionViewWillEnter() {
    this.carregarSetores();
  }

  async excluir(setor: Setor) {

    const alert = await this.alertController.create({
      header: 'Confirma a exclusão',
      message: setor.nome,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            this.setorService.excluir(setor.idSetor).subscribe({
              next:
                () => {
                  this.carregarSetores();
                  this.exibirMensagem('Registro excluído com sucesso!');
                },
              error: (erro) => {
                console.error('Erro ao excluir tarefa:', erro);
                this.exibirMensagem('Erro ao excluir o registro.');
              }
            });
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

  carregarSetores() {
    this.setorService.listar().subscribe({
      next: (dados) => {
        this.setores = dados;
      },
      error: (erro) => {
        console.error('Erro ao carregar setores:', erro);
      }
    });
  }
}


