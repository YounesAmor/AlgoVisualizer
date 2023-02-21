export function getRndIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function generateRandomArrayFromSize(size) {
  let newArray = [];
  for (var i = 0; i < size; i++) {
    newArray.push(getRndIntegerInRange(50, 200));
  }
  return newArray;
}
