import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserRespoonse } from '../models/user-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }
  
  login(user: User): Observable<UserRespoonse> {
    return this.http.post<UserRespoonse>(`${this.apiUrl}/auth/login`, user);
  }
  
  handleError(e: HttpErrorResponse) {
    console.log('httpError: ', e);
    console.log('status code: ', e.status);
    if(e.status === 403) {
      console.log('email não autorizado');
      // this.toastrNotifier.error('preencha novamente.', 'Senha incorreta!');
    } else if(e.status === 400) {
      console.log('senha incorreta');
      // this.toastrNotifier.error('Crie uma conta', 'Email não existe!');
    }
  }
}
