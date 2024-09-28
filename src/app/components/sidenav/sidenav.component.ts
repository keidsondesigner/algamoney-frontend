import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  showSubMenu: string | null = null;

  pessoasItems = [
    {
      routerLink: '/pessoas/cadastro',
      icon: 'pi pi-file-edit',
      label: 'Cadastrar',
    },
    {
      routerLink: '/pessoas/pesquisa',
      icon: 'pi pi-search',
      label: 'Pesquisar',
    },
  ];

  lancamentosItems = [
    {
      routerLink: '/lancamentos/cadastro',
      icon: 'pi pi-file-edit',
      label: 'Cadastrar',
    },
    {
      routerLink: '/lancamentos/pesquisa',
      icon: 'pi pi-search',
      label: 'Pesquisar',
    },
  ];

  toggleSubMenu(menu: string) {
    this.showSubMenu = this.showSubMenu === menu ? null : menu;
  }
}
