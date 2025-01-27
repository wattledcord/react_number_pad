import React from 'react';

const NumberPad = ({ onNumberClick, onClear, onSubmit }) => {
    const renderNumberButtons = () => {
        return Array.from({ length: 10 }, (_, i) => (React.createElement("button", { key: i, onClick: () => onNumberClick(i) }, i)));
    };
    return (React.createElement("div", { className: "number-pad" },
        React.createElement("div", null, renderNumberButtons()),
        React.createElement("div", null,
            React.createElement("button", { onClick: onClear }, "Clear"),
            onSubmit && React.createElement("button", { onClick: onSubmit }, "Submit"))));
};

export { NumberPad };
