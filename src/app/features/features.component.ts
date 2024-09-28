import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../core/services/sidenav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-features',
  styleUrls: ['features.component.scss'],
  template: `
    <section class="container">
      <div class="sidenav" [ngClass]="{'visible': isSidebarVisible$ | async, 'collapsed': !(isSidebarVisible$ | async) && !isMobile}">
        <app-sidenav></app-sidenav>
      </div>
      <div class="main-content" [ngClass]="{'full-width': !(isSidebarVisible$ | async) || isMobile}">
        <div class="content-area">
          <app-navbar></app-navbar>
          <router-outlet></router-outlet>
        </div>
      </div>
    </section>
  `,
})
export class FeaturesComponent implements OnInit {
  isSidebarVisible$: Observable<boolean>;
  isMobile = false;

  constructor(private sidenavService: SidenavService) {
    this.isSidebarVisible$ = this.sidenavService.isSidenavVisible$;
  }

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    this.sidenavService.setSidenavVisibility(!this.isMobile);
  }
}
