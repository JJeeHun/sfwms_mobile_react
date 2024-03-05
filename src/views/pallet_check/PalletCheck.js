import React from "react";
import Input from "../../components/Input";
import SearchInput from "../../components/SearchInput";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";

const labelStyle = { width: 70 };

const PalletCheck = () => {
    return (
        <div className="container">
            <SearchInput
                text={`Pallet id`}
                labelStyle={labelStyle}
                expandClick={() => {}}
            />
            <TextArea text={`Item`} labelStyle={labelStyle} />
            <div className="col2">
                <Select
                    className="flex2"
                    text={`Location`}
                    labelStyle={labelStyle}
                />
                <Input />
            </div>
            <Input text={`UOM`} labelStyle={labelStyle} />
            <div className="col2">
                <Input
                    text={`Stock`}
                    labelStyle={labelStyle}
                    // style={{ width: "5rem" }}
                />
                <Input
                    text={`PSBL`}
                    labelStyle={labelStyle}
                    // style={{ width: "5rem" }}
                />
            </div>

            <div className="btns footer">
                <button>Clear</button>
            </div>
        </div>
    );
};

export default PalletCheck;
