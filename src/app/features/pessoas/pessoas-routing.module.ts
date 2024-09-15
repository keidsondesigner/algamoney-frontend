import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';

const routes: Routes = [
  { path: 'cadastro', component: PessoasCadastroComponent },
  { path: 'pesquisa', component: PessoasPesquisaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
