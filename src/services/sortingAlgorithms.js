// import { sleep, swapElements } from "./utils";
export const finishedAnimation = (array, colors) => {
  let currentColors = [...colors[0]];
  for (let i = 0; i < array.length; i++) {
    currentColors[i] = "#04E762";
    colors.push([...currentColors]);
  }
  return colors;
};
const swapElements = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};
/*
The idea is to create a key value pair where each "index" has a state array
and a color sequence attahced to it, as one state will have multiple 
color states with it
*/
export const bubbleSort = (array) => {
  let steps = {
    0: { arrayState: array, colors: [Array(array.length).fill("gray")] },
  };
  for (let i = 0; i < array.length - 1; i++) {
    let sizeDictionary = Object.keys(steps).length;
    let currentArr = steps[sizeDictionary - 1]["arrayState"];
    for (let j = 0; j < array.length - i - 1; j++) {
      if (currentArr[j] > currentArr[j + 1]) {
        let sizeDictionary = Object.keys(steps).length;
        let currColors = steps[sizeDictionary - 1]["colors"].slice(-1)[0];
        let colorsCurrentState = [];

        swapElements(currentArr, j, j + 1);

        // Coloring the elements and putting the colors in the right indexes
        currColors[j] = "#DC143C";
        currColors[j + 1] = "#6A5ACD";
        colorsCurrentState.push([...currColors]);
        currColors[j] = "gray";
        currColors[j + 1] = "gray";
        colorsCurrentState.push([...currColors]);
        steps[sizeDictionary] = {
          arrayState: [...currentArr],
          colors: [...colorsCurrentState],
        };
      }
    }
    // Coloring the last element as it has been sorted already
    let newSizeDictionary = Object.keys(steps).length;
    let currColors = steps[newSizeDictionary - 1]["colors"].slice(-1)[0];
    currColors[currColors.length - i - 1] = "#00A1E4";
    steps[sizeDictionary - 1]["colors"].push([...currColors]);
  }
  return steps;
};
