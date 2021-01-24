import React from "react";

const NumberInput = ({ value, onChange, index, onDestroy }) => {
  const [number, setNumber] = React.useState(value);
  const [currentIndex, setCurrentIndex] = React.useState(index);

  const onChangeHandler = (e) => {
    const newNumber = parseInt(e.target.value, 10);
    setNumber(newNumber);
    onChange(newNumber, currentIndex);
  };

  const onClickHandler = (e) => {
    onDestroy(currentIndex);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="0"
        value={number}
        onChange={onChangeHandler}
      />
      <button className="button-delete" onClick={onClickHandler}>x</button>
    </div>
  );
};

export default NumberInput
