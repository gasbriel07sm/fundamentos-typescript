// Tipos básicos (onde ocorre inferência de tipos)
let nome: string = 'Luiz'; // qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
let big: bigint = 10n; // bigint

// Arrays
// exemplos 1:
let arrayDeNumeros: Array<number> = [1, 2, 3]; // array de números
let arrayDeStrings: Array<string> = ['a', 'b', 'c']; // array de strings
// exemplos 2:
let arrayDeNumeros1: number[] = [1, 2, 3]; // array de números
let arrayDeStrings2: string[] = ['a', 'b', 'c']; // array de strings

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Luiz',
  idade: 30,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

console.log(soma(2, 3));
