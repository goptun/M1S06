export default function multiplicacaoArray(array) {
  let total = 1;
  array.forEach((item) => {
    total *= item;
  });
  return total;
}
