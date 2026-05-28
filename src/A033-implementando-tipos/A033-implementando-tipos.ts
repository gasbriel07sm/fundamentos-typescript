type TipoPessoa =  {
  nome: string
  sobrenome: string
  nomeCompleto(): string
}

class Pessoa implements TipoPessoa {
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
