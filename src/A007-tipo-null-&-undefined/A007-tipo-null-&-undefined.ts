let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

function createPerson(firstName: string, lastName?: string): { firstName: string; lastName?: string } {
  return { firstName, lastName };
}

function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);

if (squareOfTwo !== null) {
  console.log(squareOfTwo.toFixed(2));
} else {
  console.log('Input is not a number');
}

export { x };
