// Array<T> ou T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}

function toUpperCase(...args: string[]): string[] {
  return args.map(str => str.toUpperCase());
}

console.log(multiplicaArgs(1, 2, 3));
console.log(concatenaStrings('Olá', ' ', 'mundo!'));
console.log(toUpperCase('typescript', ' é', ' legal!'));
