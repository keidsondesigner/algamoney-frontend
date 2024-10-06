import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, shareReplay, switchMap, take, tap } from 'rxjs';
import { ListarLancamentosResponse } from '../models/user-response.model';

@Injectable({
  providedIn: 'root',
})
export class LancamentosService {
  // private baseUrl = 'http://localhost:8080';
  private baseUrl = 'https://algamoney-api-j1pt.onrender.com';

  private cacheSubject = new BehaviorSubject<{ [key: string]: ListarLancamentosResponse[] }>({});
  private cache$ = this.cacheSubject.asObservable();

  constructor(private http: HttpClient) {}

  listarLancamentos(): Observable<ListarLancamentosResponse[]> {
    return this.cache$.pipe(
      take(1),
      map(cache => cache['listar']),
      switchMap(dados => dados ? of(dados) : this.http.get<ListarLancamentosResponse[]>(`${this.baseUrl}/lancamentos`).pipe(
        shareReplay(1),
        tap(dados => this.cacheSubject.next({ ...this.cacheSubject.value, ['listar']: dados }))
      ))
    );
  }
  
  buscarPorDescricao(termo: string): Observable<ListarLancamentosResponse[]> {
    return this.cache$.pipe(
      take(1),
      map(cache => cache[termo]),
      switchMap(dados => dados ? of(dados) : this.http.get<ListarLancamentosResponse[]>(`${this.baseUrl}/lancamentos/filtrar`, {
        params: { descricao: termo }
      }).pipe(
        tap(dados => this.cacheSubject.next({ ...this.cacheSubject.value, [termo]: dados }))
      ))
    );
  }
}