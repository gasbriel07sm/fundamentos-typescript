export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa("Luiz", 30);
const pessoa2 = new Pessoa(['Luiz'], 30);

// estrutura de dados stack (pilha)
export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T} = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined
    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  tamanho(): number {
    return this.contador;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }
}

const pilha = new Pilha<number>();
