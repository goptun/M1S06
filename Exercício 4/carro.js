class Veiculo {
  marca;
  ano;
  constructor(marca, ano) {
    this.marca = marca;
    this.ano = ano;
  }
  obterDetalhes() {
    return `O veículo é da marca ${this.marca} e foi fabricado em ${this.ano}`;
  }
}

class Carro extends Veiculo {
  portas;
  constructor(marca, ano, portas) {
    super(marca, ano);
    this.portas = portas;
  }
  obterDetalhes() {
    return `O carro é da marca ${this.marca}, foi fabricado em ${this.ano} e possui ${this.portas} portas.`;
  }
}

let carro = new Carro("Fiat", 2019, 4);

console.log(carro.obterDetalhes());
