import { evaluate } from "mathjs";
import { useState } from "react";

const useCalculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = evaluate(input).toString();
      setInput(result);
    } catch {
      setInput("Error");
    }
  };

  return { input, handleClick, handleClear, handleCalculate, handleBackspace };
};

export default useCalculator;
