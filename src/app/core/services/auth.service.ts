import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { UserRespoonse } from '../models/user-response.model';

type JwtPayload = {
  permissoes: string[];
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = 'http://localhost:8080';
  private apiUrl = 'https://algamoney-api-j1pt.onrender.com';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<UserRespoonse> {
    return this.http.post<UserRespoonse>(`${this.apiUrl}/auth/login`, user, { withCredentials: true }).pipe(
      tap(result => {
        // Definindo o cookie com o token
        sessionStorage.setItem('token', result.token);
        sessionStorage.setItem('email', result.email);

        // Decodificando o token para acessar as permissões
        const decodedTokenPermissao = this.decodeToken(result.token);
        // console.log('Permissões:', decodedTokenPermissao.permissoes); // Acessando as permissões
        sessionStorage.setItem('permissoes', JSON.stringify(decodedTokenPermissao.permissoes));
      })
    );
  }

  decodeToken(token: string): JwtPayload {
    try {
      // Separando as três partes do token (header, payload e signature)
      const payloadBase64 = token.split('.')[1];
      const decodedPayloadJson = atob(payloadBase64); // Decodificando a payload em Base64
      return JSON.parse(decodedPayloadJson) as JwtPayload;
    } catch (e) {
      console.error('Erro ao decodificar o token:', e);
      return { permissoes: [], email: '' }; // Retorna um objeto vazio se ocorrer algum erro
    }
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }

  hasPermission(permission: string): boolean {
    const permissoes = JSON.parse(sessionStorage.getItem('permissoes') || '[]');
    return permissoes.includes(permission);
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
