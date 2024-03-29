import React from "react";

const Select = ({ text, labelStyle, style }) => {
    const titleStyle = { ...labelStyle };
    const inputStyle = { ...{ flex: "1" }, ...style };

    return (
        <div
            className="select-box"
            style={{ display: "flex", alignItems: "center", gap: ".2rem" }}
        >
            {text === "" || text ? (
                <span className="title-text" style={titleStyle}>
                    {text}
                </span>
            ) : (
                ""
            )}
            <select style={inputStyle}>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
            </select>
        </div>
    );
};

export default Select;
