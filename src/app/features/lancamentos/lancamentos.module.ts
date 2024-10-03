import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { PrimengModModule } from 'src/app/shared/primeng-mod/primeng-mod.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LancamentosPesquisaComponent,
    LancamentosCadastroComponent,
  ],
  imports: [
    CommonModule,
    LancamentosRoutingModule,
    PrimengModModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LancamentosModule { }
