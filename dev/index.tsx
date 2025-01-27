import React from "react";
import ReactDOM from "react-dom/client";
import { NumberPad } from "../src/NumberPad";

const App = () => {
    const handleNumberClick = (value: number) => console.log(value);
    const handleClear = () => console.log("Cleared");

    return (
        <div>
            <h1>Preview for NumberPad</h1>
            <NumberPad onNumberClick={handleNumberClick} onClear={handleClear} showData={true} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
