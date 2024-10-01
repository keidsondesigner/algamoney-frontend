import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModModule } from '../shared/primeng-mod/primeng-mod.module';


@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
