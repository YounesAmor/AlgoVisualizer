import { useEffect, useRef, useState } from "react";
import { generateRandomArrayFromSize } from "../../services/generateArray";
import { sleep, swapElements } from "../../services/utils";
import Slider from "../slider";
import Bar from "./bar";
const BubbleSort = () => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(10);
  const animationRef = useRef(10);

  useEffect(() => {
    setArray(generateRandomArrayFromSize(100));
  }, []);

  const finishedAnimation = async () => {
    for (let i = 0; i < array.length; i++) {
      let barStyle = document.getElementById(i).style;
      barStyle.backgroundColor = "#04E762";
      await sleep(51 - animationRef.current);
    }
  };

  const bubbleSort = async () => {
    let currentArr = array;

    for (let i = 0; i < currentArr.length - 1; i++) {
      console.log(animationSpeed);
      for (let j = 0; j < currentArr.length - i - 1; j++) {
        if (currentArr[j] > currentArr[j + 1]) {
          swapElements(currentArr, j, j + 1);
          setArray([...array, currentArr]);

          let bar1 = document.getElementById(j).style;
          let bar2 = document.getElementById(j + 1).style;
          bar1.backgroundColor = "#DC143C";
          bar2.backgroundColor = "#6A5ACD";

          await sleep(51 - animationRef.current);

          bar1.backgroundColor = "#DEC0F1";
          bar2.backgroundColor = "#DEC0F1";
        }
      }
      let bar2 = document.getElementById(array.length - i - 1).style;
      bar2.backgroundColor = "#00A1E4";
    }
    finishedAnimation();
  };
  const handleChange = (e) => {
    animationRef.current = e.target.valueAsNumber;
    // setAnimationSpeed(e.target.valueAsNumber);
  };
  return (
    <div className="bg-gray-400 p-5">
      <div className="rounded-lg bg-white p-4">
        <div className="flex justify-center">
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
        >
          Generate New Array
        </button>
        <button
          className="rounded-lg bg-malachite p-2 text-white"
          onClick={bubbleSort}
        >
          Bubble Sort
        </button>
        <Slider
          min="1"
          max="50"
          handleChange={handleChange}
          defaultValue={"25"}
        />
      </div>
    </div>
  );
};

export default BubbleSort;
