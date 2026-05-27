// Array com tipos específicos
const dadosCliente: [number, string] = [ 1, 'Luiz'];
const dadosCliente2: [number, string, string] = [ 2, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [ 3, 'Luiz']; // opcional
const dadosCliente4: readonly [number, string, ...string[]] = [ 4, 'Maria', 'Silva']; // o restante é um array de strings (deixo a tupla imutável)

dadosCliente[0] = 2;
dadosCliente[1] = 'Maria';

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
