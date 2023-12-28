import React, { useState } from 'react';

export default function BtnGenerator() {
    const [display, setDisplay] = useState("");

    function btnHandler(value) {
        return setDisplay(display + value);
    };

    function equalsHandler() {

        const parsedStr = display.split(" ");

        // converts to number
        for (let i = 0; i < parsedStr.length; i++) {
          if (parsedStr[i] !== "+" && parsedStr[i] !== "-" && parsedStr[i] !== "*" && parsedStr[i] !== "/") {
            parsedStr[i] = +parsedStr[i];
          }
        }
      
        let ordered = parsedStr;
        // does * and / first
        for (let i = 0; i < parsedStr.length; i++) {
          if (ordered[i] === "*") {
            const placeholder = [ordered[i - 1] * ordered[i + 1]];
            const left = ordered.slice(0, i - 1);
            if (i + 2 - ordered.length === 0) {
              ordered = left.concat(placeholder);
            } else {
            const right = ordered.slice(i + 2 - ordered.length);
            ordered = left.concat(placeholder, right);
            }
          } else if (ordered[i] === "/") {
              const placeholder = [ordered[i - 1] / ordered[i + 1]];
              const left = ordered.slice(0, i - 1);
              if (i + 2 - ordered.length === 0) {
                ordered = left.concat(placeholder);
              } else {
              const right = ordered.slice(i + 2 - ordered.length);
              ordered = left.concat(placeholder, right);
              }
            }
        }
      
        // does + and -, and assigns the value to value
        let value = ordered[0]
        for (let i = 1; i < ordered.length; i++) {
          if (ordered[i] === "+") {
            value += ordered[i + 1];
          } else if (ordered[i] === "-") {
            value -= ordered[i + 1];
          }
        }
      
        return setDisplay(value.toString());
    };

    function negativeHandler(value) {
        if (display.length === 0) {
            return setDisplay(display + value);
        }
        if (display[display.length - 1] === " ") {
            return setDisplay(display + value);
        }
    };

    const buttons = [];
    for (let i = 1; i < 10; i++) {
        const stringer = i.toString();
        buttons.push(<button className='btn btn-outline-info lil' key={i} onClick={() => btnHandler(stringer)}>{i}</button>)
    };

    return (
        <label id="display" className='form-label'>
            Display:
            <input className="form-control display-bar" type="text" name="display" value={display} readOnly />
            <br></br>
            <div className='big-container'>
                <button className="btn btn-outline-info big" onClick={() => negativeHandler("-")}>Neg</button>
                <button className="btn btn-outline-info big" onClick={() => btnHandler("0")}>0</button>
            </div>
            <div className='lil-container'>
                {...buttons}
            </div>
            <div className='add-container'>
                <button className="btn btn-outline-info add" onClick={() => btnHandler(" + ")}>+</button>
                <button className="btn btn-outline-info add" onClick={() => btnHandler(" - ")}>-</button>
            </div>
            <div className='divide-container'>
                <button className="btn btn-outline-info divide" onClick={() => btnHandler(" / ")}>/</button>
                <button className="btn btn-outline-info divide" onClick={() => btnHandler(" * ")}>*</button>
            </div>
            <div className='clear-container'>
                <button className="btn btn-outline-info big" onClick={() => equalsHandler()}>=</button>
                <button className="btn btn-outline-info clear" onClick={() => setDisplay("")}>Clear</button>
            </div>
        </label>
    );
}