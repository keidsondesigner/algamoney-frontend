import { Component } from '@angular/core';
import { SidenavService } from '../../core/services/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  visibleSidebar: boolean = false;

  constructor(
    private sidenavService: SidenavService,
    private router: Router,
  ) {}

  onToggleSidebar() {
    this.sidenavService.toggleSidenav();
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('permissoes');
    this.router.navigate(['/auth/login']);
  }
}
