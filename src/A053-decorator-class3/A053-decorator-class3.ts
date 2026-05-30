type Constructor = { new (...args: any[]) : any };

function inverteNomeECor(param1: string, param2: string) {
  return function inverteNomeECor<T extends Constructor>(target: T): T {
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.cor = this.inverte(args[1]);
        this.nome = this.inverte(args[0]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  }
}

function outroDecorador(target: Constructor) {
  console.log('Sou o outro decorador');
}


@inverteNomeECor('Valor1', 'Valor2')
@outroDecorador
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('Animal', 'roxo');
console.log(animal);
