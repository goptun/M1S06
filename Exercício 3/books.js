class Livro {
  titulo;
  autor;
  anoPublicacao;
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }
  obterInformacoes() {
    return `O livro ${this.titulo} foi escrito por ${this.autor} e publicado em ${this.anoPublicacao}`;
  }
}

let livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
let livro2 = new Livro(
  "Harry Potter e a Pedra Filosofal",
  "J.K. Rowling",
  1997
);
let livro3 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943);

console.log(livro1.obterInformacoes());
console.log(livro2.obterInformacoes());
console.log(livro3.obterInformacoes());
