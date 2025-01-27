import React from "react";
import "./NumberPad.css";
interface NumberPadProps {
    onNumberClick: (value: number) => void;
    onClear: () => void;
    onSubmit?: () => void;
}

export const NumberPad: React.FC<NumberPadProps> = ({ onNumberClick, onClear, onSubmit }) => {
    const renderNumberButtons = () => {
        return Array.from({ length: 10 }, (_, i) => (
            <button key={i} onClick={() => onNumberClick(i)}>
                {i}
            </button>
        ));
    };

    return (
        <div className="number-pad">
            <div className="number-pad-actions">{renderNumberButtons()}</div>
            <div>
                <button onClick={onClear}>Clear</button>
                {onSubmit && <button onClick={onSubmit}>Submit</button>}
            </div>
        </div>
    );
};
