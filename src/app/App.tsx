import { useState } from "react";
import "./styles/style.scss";
import useCalculator from "./hook/CalculatorOp";
import {
  CrossIcon,
  DeleteIcon,
  DivisionIcon,
  DotIcon,
  EqualIcon,
  MinusIcon,
  PercentIcon,
  PlusIcon,
  LightIcon,
  DarkIcon,
} from "../assets/icons";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { input, handleClick, handleClear, handleCalculate, handleBackspace } =
    useCalculator();
  const [theme, setTheme] = useState(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  const ThemeIcon = theme === Theme.DARK ? DarkIcon : LightIcon;

  return (
    <div className={`calculator ${theme}`}>
      <div>
        <input className="input" type="text" value={input} readOnly />
      </div>
      <div className="button-row">
        <button className="operations grey" onClick={handleClear}>
          AC
        </button>
        <button className="operations grey" onClick={handleBackspace}>
          <DeleteIcon />
        </button>
        <button className="operations white" onClick={() => handleClick("/")}>
          <DivisionIcon />
        </button>
        <button className="operations white" onClick={() => handleClick("%")}>
          <PercentIcon />
        </button>
      </div>
      <div className="button-row">
        <button className="operations" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="operations" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="operations" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="operations white" onClick={() => handleClick("*")}>
          <CrossIcon />
        </button>
      </div>
      <div className="button-row">
        <button className="operations" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="operations" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="operations" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="operations white" onClick={() => handleClick("-")}>
          <MinusIcon />
        </button>
      </div>
      <div className="button-row">
        <button className="operations" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="operations" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="operations" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="operations white" onClick={() => handleClick("+")}>
          <PlusIcon />
        </button>
      </div>
      <div className="button-row">
        <button className="switch-theme" onClick={toggleTheme}>
          <ThemeIcon />
        </button>
        <button className="operations" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="operations " onClick={() => handleClick(".")}>
          <DotIcon />
        </button>
        <button className="operations white" onClick={() => handleCalculate()}>
          <EqualIcon />
        </button>
      </div>
    </div>
  );
};

export default App;
