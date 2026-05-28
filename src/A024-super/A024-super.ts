// classes extendidas são "superclasses"
// neste caso a classe Pessoa seria a superclasse
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ){}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `Pessoa: ${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log('ANTES: ');
    return super.getNomeCompleto();
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const p1 = new Pessoa('Luiz', 'Miranda', 30, '123.456.789-00');
console.log(p1);
console.log(p1.getIdade());
console.log(p1.getCpf());

const aluno = new Aluno('Maria', 'Silva', 20, '987.654.321-00', '0001');
console.log(aluno);
console.log(aluno.getIdade());
console.log(aluno.getCpf());
console.log(aluno.getNomeCompleto());

const cliente = new Cliente('João', 'Souza', 40, '111.222.333-44');
console.log(cliente);
console.log(cliente.getIdade());
console.log(cliente.getCpf());
console.log(cliente.getNomeCompleto());
