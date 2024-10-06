import { catchError, debounceTime, distinctUntilChanged, filter, finalize, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { LancamentosService } from './../services/lancamentos.service';
import { Component } from '@angular/core';
import { ListarLancamentosResponse } from '../models/user-response.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.scss']
})
export class LancamentosPesquisaComponent {
  searchTerm = new FormControl('');
  dateStart!: Date;
  dateEnd!: Date;

  lancamentos$!: Observable<ListarLancamentosResponse[]>;

  constructor(private _lancamentosService: LancamentosService) { }

  ngOnInit(): void {
    this.lancamentos$ = this.searchTerm.valueChanges.pipe(
      startWith(''), // Iniciar com valor input vazio
      debounceTime(200), // Aguardar 300ms após a última digitação
      distinctUntilChanged(), // Evitar chamadas repetidas com o mesmo valor
      switchMap((termo: string | null) => this.manipularBusca(termo)) // Refatorar lógica de busca
    );
  }

  private manipularBusca(termo: string | null): Observable<ListarLancamentosResponse[]> {
    if (termo && termo.length > 2) {
      return this._lancamentosService.buscarPorDescricao(termo).pipe(
        tap(response => console.log('termo dados filtrados', response)),
        catchError(error => {
          console.error('Erro ao buscar lançamentos', error);
          return of([]); // Retornar array vazio em caso de erro
        })
      );
    } else {
      return this._lancamentosService.listarLancamentos(); // Carregar todos os dados se o input estiver vazio ou menor que 3 caracteres
    }
  }
}
