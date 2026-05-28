// public -> acessado em todas as classes e subclasses (acessar de qualquer lugar)
export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Facebook', '12.345.678/0001-90');
const colaborador1 = new Colaborador('Luiz', 'Miranda');

empresa1.adicionarColaborador(colaborador1);
console.log(colaborador1);
console.log(empresa1);
// empresa1.nome = 'Google'; // Erro: não podemos alterar o 'nome' porque ele é read-only
