import { React, useState } from "react";
import Buttons from "./Buttons";
import { evaluate } from "mathjs";

// mathsjs for doing computations

function Counter() {
  // initial state as 0
  const [value, setValue] = useState("0");

  // simply calls maths.evaluate

  function calculate() {
    setValue(evaluate(value).toString());
  }

  function keyPress(key) {
    if (key === "=") {
      calculate();
    } else if (key === "BackSpace") {
      if (value.length > 1) {
        setValue(value.slice(0, -1));
      } else {
        setValue("0"); // just to look good
      }
    } else if (key === "Clear") {
      setValue("0");
    } else {
      if (value === "0") {
        setValue(key); // so that initial zero is replaced
      } else setValue(value + key);
    }
  }

  return (
    <>
      <div style={{ borderStyle: "inset", width: "40%", margin: "auto" }}>
        {" "}
        {value}{" "}
      </div>
      <Buttons onClick={keyPress} />
    </>
  );
}

export default Counter;
