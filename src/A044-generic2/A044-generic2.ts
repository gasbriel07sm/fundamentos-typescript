const arrayNumeros: Array<number> = [1 , 2, 3, 4, 5, 6];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<number> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 1000)
  })
}

minhaPromise().then(resultado => console.log(resultado + 5));
promiseAsync().then(resultado => console.log(resultado + 1));
