import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AddJwtInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('token');
    // console.log('aqui token', token);

    if(token) {
      request = request.clone({ setHeaders: { Authorization: 'Bearer ' + token }});
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401) {
          console.log(error);
          //this.toastrNotifier.error('token não fornecido', 'Error ao efetuar login!');
          console.log('Token não fornecido', 'Error ao efetuar login!');
          this.router.navigate(['/auth/login']);
        } else if(error.status ===  498) {
          this.router.navigate(['/auth/login']);
          // this.toastrNotifier.error('Efetue o login corretamente', 'Token inválido!');
          console.log('Token inválido!', 'Error ao efetuar login!');
        }
        return throwError(() => error);
      })
    );
  }
}
