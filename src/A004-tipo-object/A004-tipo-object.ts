const objetoA: Record<string, string> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B'
}
// ou
const objetoB: {[key: string]: string} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B'
};

// podemos usar readonly para impedir que as chaves sejam alteradas
const objetoC: { readonly chaveA: string, [key: string]: string} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B'
}

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Valor C';

objetoB.chaveA = 'Outro valor';
objetoB.chaveD = 'Valor D';

// objetoC.chaveA = 'Outro valor'; // erro (está como readonly, não podemos alterar seu valor)
objetoC.chaveE = 'Valor E';

console.log(objetoA);
console.log(objetoB);
console.log(objetoC);
