export default function filtrarPares(array) {
  let pares = [];
  array.filter((numero) => {
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  });
  return pares;
}
