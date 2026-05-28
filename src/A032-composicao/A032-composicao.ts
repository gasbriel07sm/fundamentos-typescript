export class Carro {
  private readonly motor: Motor = new Motor();

  ligar() {
    this.motor.ligar();
  }

   desligar() {
    this.motor.desligar();
  }

   acelerar() {
    this.motor.acelerar();
  }

   parar() {
    this.motor.parar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor ligado')
  }

  desligar(): void {
    console.log('Motor desligado')
  }

  acelerar(): void {
    console.log('ACELERANDO....')
  }

  parar(): void {
    console.log('PARANDO.....')
  }
}


const carro = new Carro();
carro.ligar();
carro.desligar();
carro.acelerar();
carro.parar();

