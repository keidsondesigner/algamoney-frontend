import { Component } from '@angular/core';
import { SidenavService } from '../../core/services/sidenav.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  visibleSidebar: boolean = false;

  constructor(
    private sidenavService: SidenavService,
    private cookieService: CookieService,
    private router: Router,
  ) {}

  onToggleSidebar() {
    this.sidenavService.toggleSidenav();
  }

  logout() {
    this.cookieService.delete('token');
    this.cookieService.delete('email');
    sessionStorage.removeItem('permissoes');
    this.router.navigate(['/auth/login']);
  }
}
