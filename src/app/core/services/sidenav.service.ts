import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private isSidenavVisibleSubject = new BehaviorSubject<boolean>(true); // Inicialmente visível
  isSidenavVisible$: Observable<boolean> = this.isSidenavVisibleSubject.asObservable();

  toggleSidenav() {
    const currentValue = this.isSidenavVisibleSubject.value;
    this.isSidenavVisibleSubject.next(!currentValue);
    //console.log('Sidenav toggled, new value:', !currentValue); // Para debug
  }

  setSidenavVisibility(isVisible: boolean) {
    this.isSidenavVisibleSubject.next(isVisible);
    //console.log('Sidenav visibility set to:', isVisible); // Para debug
  }
}