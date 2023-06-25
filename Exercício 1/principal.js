import somaArray from "./somaArray.js";
import multiplicacaoArray from "./multiplicacaoArray.js";
import mediaArray from "./mediaArray.js";

let numeros = [];
let tamanhoArray = Number(prompt("Quantidade de valores para as operações:"));

for (let index = 0; index < tamanhoArray; index++) {
  numeros[index] = Number(prompt(`Digite o ${index + 1}° número`));
}

let soma = somaArray(numeros);
let multiplica = multiplicacaoArray(numeros);
let media = mediaArray(numeros);

console.log(soma);
console.log(multiplica);
console.log(media);

alert(
  `  RESULTADOS:
  Soma: ${soma}
  Multiplicação: ${multiplica}
  Média: ${media}`
);
