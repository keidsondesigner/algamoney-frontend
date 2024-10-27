import { catchError, debounceTime, distinctUntilChanged, filter, finalize, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { LancamentosService } from './../services/lancamentos.service';
import { Component } from '@angular/core';
import { ListarLancamentosResponse } from '../models/user-response.model';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ROLES } from 'src/app/core/enums/roles';


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
  isLoading!: boolean; // Variável para controlar o estado de carregamento
  ROLE_LANCAMENTO_CADASTRAR: boolean = false;
  ROLE_LANCAMENTO_PESQUISAR: boolean = false;
  ROLE_LANCAMENTO_REMOVER: boolean = false;

  constructor(private _lancamentosService: LancamentosService, private _authService: AuthService) { }

  ngOnInit(): void {

    this.lancamentos$ = this.searchTerm.valueChanges.pipe(
      startWith(''), // Iniciar com valor input vazio
      debounceTime(300), // Aguardar 300ms após a última digitação
      distinctUntilChanged(), // Evitar chamadas repetidas com o mesmo valor
      tap(() => this.isLoading = true), // Iniciar o loading antes da busca
      switchMap((termo: string | null) => {
        this.isLoading = true; // Iniciar carregamento
        return this.manipularBusca(termo).pipe(
          finalize(() => this.isLoading = false) // Finalizar loading após a busca
        );
      })
    );

    this.carregarPermissoes();

  }

  manipularBusca(termo: string | null): Observable<ListarLancamentosResponse[]> {
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

  carregarPermissoes() {
    this.ROLE_LANCAMENTO_CADASTRAR = this._authService.hasPermission(ROLES.LANCAMENTO_CADASTRAR);
    this.ROLE_LANCAMENTO_PESQUISAR = this._authService.hasPermission(ROLES.LANCAMENTO_PESQUISAR);
    this.ROLE_LANCAMENTO_REMOVER = this._authService.hasPermission(ROLES.LANCAMENTO_REMOVER);
  }
}
