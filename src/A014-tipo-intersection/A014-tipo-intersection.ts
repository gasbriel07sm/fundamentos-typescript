// AND &
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// Intersection type seria o & (combinação)
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30
}

type AB = 'A' | 'B';
type AC = 'A' | 'C';


console.log(pessoa);

export { pessoa };
