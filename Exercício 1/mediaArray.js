export default function mediaArray(array) {
  let media = 0;
  array.forEach((item) => {
    media += item;
  });
  media = media / array.length;
  return media;
}
