interface TipoNome {
  nome: string
}

interface TipoSobrenome {
  sobrenome: string
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ){}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
export { pessoa }
