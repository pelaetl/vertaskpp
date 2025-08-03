import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Setor } from 'src/app/model/setor';
import { SetorService } from 'src/app/services/setor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.page.html',
  styleUrls: ['./cadastro-funcionario.page.scss'],
  standalone: false,
})
export class CadastroFuncionarioPage implements OnInit {

  setores: Setor[];
  funcionario: Funcionario;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastController: ToastController, private activatedRoute: ActivatedRoute, private navController: NavController, private funcionarioService: FuncionarioService, private setorService: SetorService) {
    this.setores = [];
    this.funcionario = new Funcionario();

    this.formGroup = this.formBuilder.group({
      //'produto': [this.funcionario.produto, Validators.compose([Validators.required])],
      'valor': ['', Validators.compose([Validators.required])]
    });
  }

  logar(){

  }
  
  ngOnInit() {
    this.carregarSetores();

    // const id = parseFloat(this.activatedRoute.snapshot.params['id']);
    
    // if (!isNaN(id)) {
    //   this.funcionario = this.funcionarioService.buscarPorId(id);
    //   const produtoEncontrado = this.setores.find(t => t.id === this.funcionario.produto.id);
    //   if (produtoEncontrado) {
    //     this.funcionario.produto = produtoEncontrado;
    //   }
    //   this.formGroup.get('produto')?.setValue(this.funcionario.produto);
    //   this.formGroup.get('valor')?.setValue(this.funcionario.valor);
    // }
  }

  salvar() {
    // this.funcionario.produto = this.formGroup.value.produto;
    // this.funcionario.valor = this.formGroup.value.valor;
    // if(this.funcionarioService.existeAlertaComIdProduto(this.alerta.produto.id)){
    //   this.exibirMensagem('Este produto já possui um alerta.');
    // }else{
    //   this.alertaService.salvar(this.alerta);
    //   this.exibirMensagem('Registro salvo com sucesso!!!');
    //   this.navController.navigateBack('/alerta');
    // }

  }  

  carregarSetores() {
   this.setorService.listar().subscribe({
     next: (setores) => {
       this.setores = setores;
     },
     error: (err) => {
       this.exibirMensagem('Erro ao carregar os setores.');
     }
   });
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present()
  }
}

