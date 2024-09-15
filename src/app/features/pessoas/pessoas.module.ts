import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PrimengModModule } from 'src/app/shared/primeng-mod/primeng-mod.module';
import { FormsModule } from '@angular/forms';
import { PessoasComponent } from './pessoas.component';



@NgModule({
  declarations: [
    PessoasComponent,
    PessoasPesquisaComponent,
    PessoasCadastroComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    PrimengModModule,
    FormsModule,
  ]
})
export class PessoasModule { }
