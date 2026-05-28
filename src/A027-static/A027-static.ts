// classes extendidas são "superclasses"
// neste caso a classe Pessoa seria a superclasse
export class Pessoa {
  static idadePadrao = 0;

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public _cpf: string,
  ){}

  static falaOi(): void {
    console.log('oi')
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, '00000000000');
  }

}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '00000000000')
Pessoa.falaOi();
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');
