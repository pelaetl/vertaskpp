import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  usuario: Usuario;
  login: String;
  senha: String;
  formGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private toastController: ToastController, private navController: NavController, private usuarioService: UsuarioService) {
    this.login = "";
    this.senha = "";
    this.usuario = new Usuario();

    this.formGroup = this.formBuilder.group({
      'login': [this.login, Validators.compose([Validators.required])],
      'senha': [this.senha, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.usuarioService.encerrar();
  }

  autenticar() {
    this.login = this.formGroup.value.login;
    this.senha = this.formGroup.value.senha;

    this.usuarioService.autenticar(this.login, this.senha).subscribe({
  next: user => {
    this.usuarioService.setCurrentUser(user);
    this.router.navigate(['/inicio-administrador']); // ou rota correta
  },
  error: err => {
    console.error('login error', err);
    this.exibirMensagem('Login ou senha inválidos');
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


