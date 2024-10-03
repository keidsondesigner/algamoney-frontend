export interface ListarLancamentosResponse {
  codigo:         number;
  descricao:      string;
  dataVencimento: Date;
  dataPagamento:  Date;
  valor:          number;
  observacao:     string;
  tipo:           Tipo;
  categoria:      Categoria;
  pessoa:         Pessoa;
}

export interface Categoria {
  codigo: number;
  nome:   string;
}

export interface Pessoa {
  codigo:   number;
  nome:     string;
  ativo:    boolean;
  endereco: Endereco;
}

export interface Endereco {
  logradouro:  string;
  numero:      string;
  complemento: null | string;
  bairro:      string;
  cep:         string;
  cidade:      string;
  estado:      string;
}

export enum Tipo {
  Despesa = "DESPESA",
  Receita = "RECEITA",
}
