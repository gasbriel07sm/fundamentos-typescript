interface Pessoa {
  nome: string;
};

interface Pessoa {
  readonly sobrenome: string;
}

// opcional
interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda'
}

console.log(pessoa);

export { pessoa };
