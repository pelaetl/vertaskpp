import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'setor',
    loadChildren: () => import('./pages/setor/setor.module').then( m => m.SetorPageModule)
  },
  {
    path: 'cadastro-administrador',
    loadChildren: () => import('./pages/cadastro-administrador/cadastro-administrador.module').then( m => m.CadastroAdministradorPageModule)
  },
  {
    path: 'cadastro-funcionario',
    loadChildren: () => import('./pages/cadastro-funcionario/cadastro-funcionario.module').then( m => m.CadastroFuncionarioPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio-administrador',
    loadChildren: () => import('./pages/inicio-administrador/inicio-administrador.module').then( m => m.InicioAdministradorPageModule)
  },
  {
    path: 'inicio-funcionario',
    loadChildren: () => import('./pages/inicio-funcionario/inicio-funcionario.module').then( m => m.InicioFuncionarioPageModule)
  },
  {
    path: 'add-setor',
    loadChildren: () => import('./pages/add-setor/add-setor.module').then( m => m.AddSetorPageModule)
  },
  {
    path: 'add-tarefa',
    loadChildren: () => import('./pages/add-tarefa/add-tarefa.module').then( m => m.AddTarefaPageModule)
  },
  {
    path: 'minhas-tarefas',
    loadChildren: () => import('./pages/minhas-tarefas/minhas-tarefas.module').then( m => m.MinhasTarefasPageModule)
  },
  {
    path: 'todas-tarefas',
    loadChildren: () => import('./pages/todas-tarefas/todas-tarefas.module').then( m => m.TodasTarefasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
