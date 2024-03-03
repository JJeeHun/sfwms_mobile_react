import React from "react";

const SearchInput = ({ text, labelStyle, expandClick }) => {
    const titleStyle = { ...labelStyle };
    const inputStyle = { flex: "1" };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
            {text === "" || text ? (
                <span className="title-text" style={titleStyle}>
                    {text}
                </span>
            ) : (
                ""
            )}
            <input type="text" style={inputStyle} />
            <button
                style={{
                    padding: ".5rem",
                    backgroundColor: "var(--white-color)",
                }}
                onClick={() => expandClick()}
            >
                ☞
            </button>
        </div>
    );
};

export default SearchInput;
