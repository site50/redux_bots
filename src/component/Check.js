import React, { useState } from "react";

function Check(props) {
    const [value, setValue] = useState("")
    if (value === props.arrU || value === props.arrU.toUpperCase() || value === props.arrU.toLowerCase()) {
        return <span>It correct! {props.arrU}</span>
    }
    return (
        <span>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="write it in French"/>
        </span>
    );
}
export default Check;
