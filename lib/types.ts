export interface Pagamento {
  dataPagamento: string;
  notaPagamento: string;
  liquidacao: string;
  empenho: string;
  contaFinanceira: string;
  despesa: string;
  fonte: string;
  valor: number;
}

export interface Beneficiario {
  nome: string;
  cpf: string;
  processoSei: string;
  curso: string;
  pagamentos: Pagamento[];
  quantidadePagamentos: number;
  valorTotalRecebido: number;
}

export interface FilterState {
  ano: string;
  curso: string;
  contaFinanceira: string;
  despesa: string;
  fonte: string;
  valorMinimo: number;
  valorMaximo: number;
  beneficiario: string;
}

export interface AggregateDatum {
  name: string;
  valor: number;
  quantidade: number;
}

export interface DashboardStats {
  totalRecursos: number;
  totalPagamentos: number;
  totalBeneficiarios: number;
  beneficiariosUnicos: number;
  processosSei: number;
  cursos: number;
  contasFinanceiras: number;
  despesas: number;
  fontes: number;
  anos: number[];
  registrosImportados: number;
  beneficiariosDuplicados: number;
  valorMedioPorBeneficiario: number;
  maiorPagamento: number;
  menorPagamento: number;
  cursoMaiorInvestimento: string;
  cursoMaisAlunos: string;
  contaMaiorVolume: string;
  despesaMaiorInvestimento: string;
  fonteMaisUtilizada: string;
}

export interface FilterOptions {
  anos: string[];
  cursos: string[];
  contasFinanceiras: string[];
  despesas: string[];
  fontes: string[];
  valorMinimo: number;
  valorMaximo: number;
}
