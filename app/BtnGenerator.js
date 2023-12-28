import React, { useState } from 'react';

export default function BtnGenerator() {
    const [display, setDisplay] = useState("");

    function btnHandler(value) {
        return setDisplay(display + value);
    };

    function equalsHandler() {
        // ERROR if they try to start or end the string with an operator
        if (display[0] === " " || display[display.length - 1] === " ") {
            return setDisplay("ERROR");
        }

        const displayArr = display.split(" ");

        // converts string to integer
        for (let i = 0; i < displayArr.length; i++) {
            if (displayArr[i] !== "+" && displayArr[i] !== "-" && displayArr[i] !== "/" && displayArr[i] !== "*") {
                displayArr[i] = parseInt(displayArr[i]);
            }
        }

        // for loop that adds and subtracts as they come (no order of operations)
        let value = displayArr[0];
        for (let i = 1; i < displayArr.length - 1; i++) {
            if (typeof displayArr[i] === 'number') {
                console.log("skipping");
                continue;
            }
            if (displayArr[i] === "+") {
                value += displayArr[i + 1];
            } else if (displayArr[i] === "-") {
                value -= displayArr[i + 1];
            } else if (displayArr[i] === "/") {
                value /= displayArr[i + 1];
            } else if (displayArr[i] === "*") {
                value *= displayArr[i + 1];
            }
        }
        value = value.toString();
        return setDisplay(value);

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
    for (let i = 0; i < 10; i++) {
        const stringer = i.toString();
        buttons.push(<button key={i} onClick={() => btnHandler(stringer)}>{i}</button>)
    };

    return (
        <label>
            Display:
            <input type="text" name="display" value={display} readOnly />
            {...buttons}
            <button onClick={() => btnHandler(" + ")}>+</button>
            <button onClick={() => btnHandler(" - ")}>-</button>
            <button onClick={() => btnHandler(" / ")}>/</button>
            <button onClick={() => btnHandler(" * ")}>*</button>
            <button onClick={() => equalsHandler()}>=</button>
            <button onClick={() => negativeHandler("-")}>Neg</button>
            <button onClick={() => setDisplay("")}>Clear</button>
        </label>
    );
}