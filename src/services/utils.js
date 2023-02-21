export function sleep(milliSeconds) {
  return new Promise((resolve) => setTimeout(resolve, milliSeconds));
}
export const swapElements = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};
