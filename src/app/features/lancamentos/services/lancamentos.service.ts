import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, shareReplay, switchMap, take, tap } from 'rxjs';
import { ListarLancamentosResponse } from '../models/user-response.model';

@Injectable({
  providedIn: 'root',
})
export class LancamentosService {
  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) {}

  listarLancamentos(): Observable<ListarLancamentosResponse[]> {
    return this.http.get<ListarLancamentosResponse[]>(`${this.baseUrl}/lancamentos`);
  }
  
  buscarPorDescricao(termo: string): Observable<ListarLancamentosResponse[]> {
    return this.http.get<ListarLancamentosResponse[]>(`${this.baseUrl}/lancamentos/filtrar`, {
      params: { descricao: termo }
    });
  }
}
