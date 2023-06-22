import { useState } from "react";
import Counter from "./Counter";

export default function AppCounter() {
  const [firsetNumber, setFritstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const totalNumber = firsetNumber + secondNumber;

  return (
    <div style={{ margin: "0 atuo", textAlign: "center" }}>
      <div style={{ marginBottom: "1rem" }}>
        Total Count: {totalNumber}
        <span>{totalNumber > 10 ? `🐣` : `🤍`}</span>
      </div>
      <Counter
        number={firsetNumber}
        onClick={() => setFritstNumber(firsetNumber + 1)}
      />
      <Counter
        number={secondNumber}
        onClick={() => setSecondNumber(secondNumber + 1)}
      />
    </div>
  );
}
