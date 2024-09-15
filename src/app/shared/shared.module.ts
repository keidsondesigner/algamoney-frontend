import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { PrimengModModule } from './primeng-mod/primeng-mod.module';
import { RouterModule } from '@angular/router';
import { SidenavService } from '../core/services/sidenav.service';

@NgModule({
  declarations: [NavbarComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModModule
  ],
  providers: [SidenavService],
  exports: [NavbarComponent, SidenavComponent, PrimengModModule]
})
export class SharedModule { }