export class Produto {
  constructor(
    public nome: string,
    public preco: number
  ) {}
}

export class CarrinhoCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
       this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((acc, valor) => acc + valor.preco, 0);
  }
}

const produto1 = new Produto('Camiseta', 49.99);
const produto2 = new Produto('Caneca', 9.99);
const produto3 = new Produto('Caneta', 0.99);

const carrinhoCompras = new CarrinhoCompras;

carrinhoCompras.inserirProduto(produto1, produto2, produto3);
console.log(carrinhoCompras.valorTotal().toFixed(2));
console.log(carrinhoCompras.quantidadeProdutos());

