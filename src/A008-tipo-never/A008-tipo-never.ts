// nunca vai retornar nada
function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();

// ou seja, a função acima nunca vai retornar nada, ela sempre vai lançar um erro
