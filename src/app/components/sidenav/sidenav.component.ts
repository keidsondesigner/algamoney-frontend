import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  menuItems = [
    {
      routerLink: '/lancamentos/pesquisa',
      icon: 'pi pi-home',
      label: 'Lan pesquisa',
    },
    {
      routerLink: '/lancamentos/cadastro',
      icon: 'pi pi-info-circle',
      label: 'Lan cadastro',
    },
    {
      routerLink: '/pessoas/pesquisa',
      icon: 'pi pi-home',
      label: 'Pessoa pesquisa',
    },
    {
      routerLink: '/pessoas/cadastro',
      icon: 'pi pi-info-circle',
      label: 'Pessoa cadastro',
    },
  ];
}
