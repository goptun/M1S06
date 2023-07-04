import filtrarPares from "./filtrarPares.js";
import somaImpares from "./somaImpares.js";

let numeros = [];
let tamanhoArray = Number(
  prompt(
    "Quantos números você gostaria de digitar para realizar as operações de Filtrar Pares e Somar Impares?"
  )
);

for (let index = 0; index < tamanhoArray; index++) {
  numeros[index] = Number(prompt(`Digite o ${index + 1}° número`));
}

let pares = filtrarPares(numeros);
let somaDeImpares = somaImpares(numeros);

console.log(pares);
console.log(somaDeImpares);

alert(
  `Segue relatório das operações com os números digitados: Pares Filtrados -> [${pares}]. Soma de ímpares ${somaDeImpares}.`
);