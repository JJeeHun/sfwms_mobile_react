import React, { useState } from "react";

const CellStyle = {
    flex: 1,
    border: "1px solid lightgray",
    boxSizing: "border-box",
};

const Cell = ({ style, text, setSelectIndex }) => (
    <div
        className="grid-cell flex-center"
        style={{ ...CellStyle, ...style }}
        onClick={({ target }) => {
            if (!setSelectIndex) return;
            const rowIndex =
                +target.parentElement.parentElement.getAttribute("dataset-row");
            setSelectIndex(rowIndex ?? -1);
        }}
    >
        <p style={{ width: "100%", textAlign: style?.textAlign || "center" }}>
            {text}
        </p>
    </div>
);
const EmptySearch = () => (
    <div className="flex-center" style={{ width: "100%", height: "100%" }}>
        {"조회X"}
    </div>
);

const Grid = ({ data = [], config = [], style, onSelected }) => {
    const [selectIndex, setSelectIndex] = useState(-1);

    return (
        <div className="grid" style={style}>
            <div
                className="grid-header"
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                }}
            >
                {config.map((cell) => (
                    <Cell
                        key={cell.column + "_head"}
                        style={{ ...cell.style }}
                        text={cell.text}
                    />
                ))}
            </div>
            <div className="grid-data" style={{ height: "100%" }}>
                {!data || data?.length < 1 ? (
                    <EmptySearch />
                ) : (
                    data.map((row, rowIndex) => {
                        return (
                            <div
                                className={`grid-row ${
                                    rowIndex === selectIndex ? "selected" : ""
                                }`}
                                dataset-row={rowIndex}
                                key={rowIndex}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                }}
                            >
                                {config.map((cell) => (
                                    <Cell
                                        key={cell.column + "_body" + rowIndex}
                                        style={{
                                            ...cell.style,
                                            ...cell.bodyStyle,
                                        }}
                                        text={row[cell.column]}
                                        setSelectIndex={(index) => {
                                            setSelectIndex(index);
                                            if (onSelected) onSelected(row);
                                        }}
                                    />
                                ))}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Grid;
