// não ordenada, enumerar
enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  VERDE = 200
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]); // undefined, não tem o índice 0
console.log(Cores[10]);

enum Cores {
  ROXO = 'ROXO',
  AMARELO = 201,
  ROSA,
}

function escolhaCor(cor: Cores) {
  console.log(`A cor escolhida foi: ${Cores[cor]}`);
}

escolhaCor(Cores.AMARELO);
