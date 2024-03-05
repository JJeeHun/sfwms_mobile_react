import React, { useState } from "react";
import css from "./OrderScan.module.css";
import SearchInput from "../../components/SearchInput";
import Input from "../../components/Input";
import Grid from "../../components/Grid";
import OrderPlan from "../../popup/order_plan/OrderPlan";

const width = 70;
const config = [
    { text: "item", column: "sku" },
    {
        text: "Item Name",
        column: "skunm",
        style: { flexBasis: "5rem" },
        bodyStyle: { textAlign: "left" },
    },
    { text: "Qty", column: "qty" },
    { text: "Scan", column: "scanqty" },
    { text: "STAT", column: "stat" },
];
const data = [
    { sku: "item1", skunm: "item Name1", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
    { sku: "item2", skunm: "item Name2", qty: 10, scanqty: 20, stat: 10 },
];

const OrderScan = () => {
    const [isOrderNoPopup, setisOrderNoPopup] = useState(false);
    const [selectedData, setSelectedData] = useState(undefined);

    return (
        <div className="container">
            {isOrderNoPopup ? (
                <OrderPlan
                    onSelected={(data) => {
                        setSelectedData(data);
                    }}
                    onClose={() => setisOrderNoPopup(false)}
                />
            ) : (
                ""
            )}

            <section className={css["search-area"]}>
                <SearchInput
                    text={"Order No."}
                    labelStyle={{ width }}
                    expandClick={() => setisOrderNoPopup(true)}
                />
                <Input text={"Ship to"} labelStyle={{ width }} />
            </section>

            <div className="content-title">Order List</div>
            <section className={css["content-list"]}>
                <Grid data={data} config={config} style={{ height: "35rem" }} />
            </section>

            <div className="btns">
                <button onClick={() => console.log(selectedData)}>
                    클리어
                </button>
            </div>
        </div>
    );
};

export default OrderScan;
