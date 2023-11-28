import React from 'react'

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", width: "2%" }}
            onClick={onClick}
        />
    );
}

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}

