export default function somaArray(array) {
  let total = 0;
  array.forEach((item) => {
    total += item;
  });
  return total;
}
