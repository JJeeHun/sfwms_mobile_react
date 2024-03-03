import React, { useState } from "react";
import Date from "../../components/Date";
import Grid from "../../components/Grid";
import css from "./OrderPlan.module.css";

const config = [
    {
        text: "Order No.",
        column: "oderno",
        bodyStyle: {
            textAlign: "left",
        },
    },
    {
        text: "Ship to",
        column: "dvcust",
        style: { flexBasis: "5rem" },
        bodyStyle: { textAlign: "left" },
    },
];

const data = [
    { oderno: "1", dvcust: "data1" },
    { oderno: "2", dvcust: "data1" },
    { oderno: "3", dvcust: "data1" },
    { oderno: "4", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
    { oderno: "1", dvcust: "data1" },
];

const OrderPlan = ({ onSelected, onClose }) => {
    const [selected, setSelected] = useState(undefined);
    return (
        <>
            <div className="overlay"></div>
            <section className={css["box-center"]}>
                <h3 className={css.title}>Order No.</h3>
                <div className={css.content}>
                    <Date
                        text={"RTA"}
                        value={"2024-03-03"}
                        labelStyle={{ width: "3rem" }}
                    />
                    <Grid
                        config={config}
                        data={data}
                        style={{ height: "23rem" }}
                        onSelected={(selectedData) => setSelected(selectedData)}
                    />
                    <div className="btns">
                        <button
                            onClick={() => {
                                onSelected(selected);
                                onClose();
                            }}
                        >
                            Select
                        </button>
                        <button onClick={() => onClose()}>Cancel</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderPlan;
