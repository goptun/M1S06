export default function somaImpares(array) {
  let impares = [];
  let total = 0;
  array.filter((numero) => {
    if (numero % 2 != 0) {
      impares.push(numero);
    }
  });
  impares.forEach((impar) => {
    total += impar;
  });
  return total;
}
