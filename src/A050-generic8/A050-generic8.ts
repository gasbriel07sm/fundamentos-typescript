const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
}

type PessoaRequired = Required<PessoaProtocol>;
type PessoaPartial = Partial<PessoaRequired>;
type PessoaReadonly = Readonly<PessoaRequired>;
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
}
console.log(objeto2);

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExclude = Exclude<ABC, CDE>;
type tipoExtract = Extract<ABC, CDE>;

