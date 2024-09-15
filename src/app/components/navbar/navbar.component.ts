import { Component } from '@angular/core';
import { SidenavService } from '../../core/services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  visibleSidebar: boolean = false;

  constructor(private sidenavService: SidenavService) {}

  onToggleSidebar() {
    this.sidenavService.toggleSidenav();
  }
}
