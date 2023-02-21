import { useEffect, useRef, useState } from "react";
import { generateRandomArrayFromSize } from "../../services/generateArray";
import {
  finishedAnimation,
  bubbleSort,
} from "../../services/sortingAlgorithms";

import { sleep } from "../../services/utils";
import Slider from "../slider";
import Bar from "./bar";
const Sort = () => {
  const [array, setArray] = useState([]);
  const animationRef = useRef(80);
  const animationAnchor = useRef(101);
  const [disableButtons, setDisableButtons] = useState(false);
  const [numComparaison, setNumComparaison] = useState(0);
  const arrayCopyOriginalOrder = useRef([]);

  useEffect(() => {
    const newCreatedArray = generateRandomArrayFromSize(100);
    setArray(newCreatedArray);
    arrayCopyOriginalOrder.current = newCreatedArray;
  }, []);

  const triggerFinishedAnimation = async () => {
    const colors = finishedAnimation(array, [
      Array(array.length).fill("#00A1E4"),
    ]);
    for (const array of colors) {
      for (let i = 0; i < array.length; i++) {
        let barStyle = document.getElementById(i).style;
        barStyle.backgroundColor = array[i];
      }
      await sleep(animationAnchor.current - animationRef.current);
    }
  };

  const vizualizeAlgorithm = async (steps) => {
    setDisableButtons(true);
    for (const subStep of Object.keys(steps)) {
      setArray(steps[subStep]["arrayState"]);
      setNumComparaison((prev) => prev + 1);
      for (const colors of steps[subStep]["colors"]) {
        for (let i = 0; i < colors.length; i++) {
          let barStyle = document.getElementById(i).style;
          barStyle.backgroundColor = colors[i];
        }
        await sleep(animationAnchor.current - animationRef.current);
      }
    }
    triggerFinishedAnimation();
    setDisableButtons(false);
  };
  const triggerBubbleSort = () => {
    // we are passing the anchor in case user wants to resort the same array
    const steps = bubbleSort(arrayCopyOriginalOrder.current);
    // We delete the first element to not be one step ahead (if you delete steps[0] you wont have a blue bar at the right at he begining)
    delete steps[0];
    vizualizeAlgorithm(steps);
  };

  const handleChange = (e) => {
    animationRef.current = e.target.valueAsNumber;
  };
  return (
    <div className="bg-gray-400 p-5">
      <div className="rounded-lg bg-white p-4">
        <div className="flex justify-center gap-1">
          {array.map((value, index) => {
            if (Number.isInteger(value)) {
              return <Bar length={value} key={index} index={index} />;
            }
            return <div key={index}></div>;
          })}
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <button
          className="rounded-lg bg-malachite p-2 text-white"
          onClick={() => setArray(generateRandomArrayFromSize(100))}
          disabled={disableButtons}
        >
          Generate New Array
        </button>
        <button
          className="rounded-lg bg-malachite p-2 text-white"
          onClick={triggerBubbleSort}
          disabled={disableButtons}
        >
          Bubble Sort
        </button>
        <Slider
          min="1"
          max="100"
          handleChange={handleChange}
          defaultValue={"80"}
        />
      </div>
      <p>{numComparaison}</p>
    </div>
  );
};

export default Sort;
