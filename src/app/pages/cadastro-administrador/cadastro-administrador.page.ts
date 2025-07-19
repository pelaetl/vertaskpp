import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/model/administrador';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro-administrador',
  templateUrl: './cadastro-administrador.page.html',
  styleUrls: ['./cadastro-administrador.page.scss'],
  standalone: false,
})
export class CadastroAdministradorPage implements OnInit {

  administrador: Administrador;
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastController: ToastController, private activatedRoute: ActivatedRoute, private navController: NavController, private usuarioService: UsuarioService) {

    this.administrador = new Administrador();

    this.formGroup = this.formBuilder.group({
      //'produto': [this.funcionario.produto, Validators.compose([Validators.required])],
      'nome': [this.administrador, Validators.compose([Validators.required])],
      'email': [this.administrador, Validators.compose([Validators.required])],
      'senha': [this.administrador, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  logar() {
    // Implementar lógica de login
  }

}
