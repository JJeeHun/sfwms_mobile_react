import React, { useEffect, useRef } from "react";

const Date = ({ text, labelStyle, style, value, onChange }) => {
    const titleStyle = { ...labelStyle };
    const inputStyle = { ...{ flexBasis: "100%", height: "2rem" }, ...style };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: ".2rem",
            }}
        >
            {text === "" || text ? (
                <span className="title-text" style={titleStyle}>
                    {text}
                </span>
            ) : (
                ""
            )}
            <input
                type="date"
                style={inputStyle}
                value={value}
                onChange={({ target }) => onChange(target.value)}
            />
        </div>
    );
};

export default Date;
