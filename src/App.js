import { v4 as uuidv4 } from "uuid";
import React from "react";
import "./index.css"

import NumberInput from "./components/numberInputs";

const App = () => {
  const [numbers, setNumbers] = React.useState([0, 0]);
  const [result, setResult] = React.useState(0);

  const addNumber = (e) => {
    let arr = [...numbers];
    arr.push(0);
    setNumbers(arr);
  };

  const getSum = (e) => {
    setResult(numbers.reduce((acc, curr) => acc + curr));
  };

  const updateNumber = (value, index) => {
    let arr = [...numbers];
    arr[index] = value;
    setNumbers(arr);
  };

  const deleteNumber = () => {
    let arr = [...numbers];
    if (arr.length === 2) {
      alert("cant delete more elements");
      return;
    }
    arr.pop();
    setNumbers(arr);
  };

  const deleteItem = (index) => {
    let arr = [...numbers];
    arr.splice(index, 1);
    console.log(arr);
    setNumbers(arr);
  };

  return (
    <div className="App">
      <h1>Adding Numbers</h1>

      <div className="number-inputs">
        {numbers.map((number, index) => (
          <NumberInput
            key={uuidv4()}
            value={number}
            onChange={updateNumber}
            index={index}
            onDestroy={deleteItem}
          />
        ))}
      </div>

      <button className="button-action" onClick={addNumber}>Add number!</button>

      <button className="button-action" onClick={getSum}>Add Them!</button>

      <button className="button-action" onClick={deleteNumber}>delete number</button>

      <h2>{result}</h2>

    </div>
  );
}

export default App
