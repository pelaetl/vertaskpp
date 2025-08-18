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
      'setor': [this.funcionario.idSetor, Validators.compose([Validators.required])],
      'nome': [this.funcionario.nome, Validators.compose([Validators.required])],
      'email': [this.funcionario.email, Validators.compose([Validators.required])],
      'senha': [this.funcionario.senha, Validators.compose([Validators.required])],
    });
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
    this.funcionario.nome = this.formGroup.value.nome;
    this.funcionario.email = this.formGroup.value.email;
    this.funcionario.senha = this.formGroup.value.senha;
    this.funcionario.idSetor = this.formGroup.value.setor;

    console.log('Enviando funcionário:', this.funcionario); // 🔍 para debug

    this.funcionarioService.salvar(this.funcionario).subscribe({
      next: () => {
        this.exibirMensagem('Funcionário cadastrado com sucesso!');
        this.navController.navigateBack('/inicio-funcionario'); // ajuste a rota conforme seu app
      },
      error: () => {
        this.exibirMensagem('Erro ao cadastrar funcionário.');
      }
    });
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

