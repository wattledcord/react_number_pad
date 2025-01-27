import React from "react";
import "./NumberPad.css";
interface NumberPadProps {
    onNumberClick: (value: number) => void;
    onClear: () => void;
    showData?: boolean;
}

export const NumberPad: React.FC<NumberPadProps> = (props: NumberPadProps) => {

    const [data, setData] = React.useState<string>("");
    const { showData = false, onNumberClick, onClear } = props;
    const NumberKeys = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "C"];

    const onNumberKeyClick = (value: string|number) => {
        if (value === "C") {
            setData("");
            onClear();
        }else {
            setData((prevData) => prevData + value);
            if (typeof value === "number"){
                onNumberClick(value);
            }
        }
       
    }

    const renderNumberButtons = () => {
        return NumberKeys.map((value, i) => (
            <button key={i} onClick={() => onNumberKeyClick(value)}>
                {value}
            </button>
        ));
    };

    return (
        <div className="number-pad">
            {showData && <div className="data">{data}</div>}
            <div className="number-pad-actions">{renderNumberButtons()}</div>
        </div>
    );
};
