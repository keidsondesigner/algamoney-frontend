import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { PrimengModModule } from './primeng-mod/primeng-mod.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModModule
  ],
  exports: [NavbarComponent, PrimengModModule]
})
export class SharedModule { }