import React from "react";
interface NumberPadProps {
    onNumberClick: (value: number) => void;
    onClear: () => void;
    onSubmit?: () => void;
}
export declare const NumberPad: React.FC<NumberPadProps>;
export {};
