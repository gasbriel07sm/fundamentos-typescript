const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFiltradoOriginal = array.filter(value => value < 5);
console.log(arrayFiltradoOriginal);

type FilterCallback<T> = (
  valor: T,
  index?: number,
  array?: T[],
) => boolean;

function meuFilter<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
};

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);
