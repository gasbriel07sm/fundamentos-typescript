// protected
export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '111111111')
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if(colaborador) return colaborador
    return null
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Facebook', '12.345.678/0001-90');
const empresa2 = new Udemy();
const colaborador1 = new Colaborador('Luiz', 'Miranda');

empresa1.adicionarColaborador(colaborador1);
console.log(colaborador1);
console.log(empresa1);
console.log(empresa2);

// empresa1.nome = 'Google'; // Erro: não podemos alterar o 'nome' porque ele é read-only
empresa2.popColaborador();
console.log(empresa2);
