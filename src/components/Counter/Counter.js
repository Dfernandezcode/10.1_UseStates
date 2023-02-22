import "./Counter.css";
import React from "react";


const Counter = () => {

    const [counterValue, setCounterValue] = React.useState(0);



    return (
        <div className="counter-box">
            <p>Current Value: ${counterValue}</p>
            <button className="counter-button--add" onClick={() => setCounterValue(counterValue +1)}>Add $1</button>
            <button className="counter-button--add" onClick={() => setCounterValue(counterValue +5)}>Add $5</button>
            <button className="counter-button--add" onClick={() => setCounterValue(counterValue +10)}>Add $10</button>

            <button className="counter-button--subtract" onClick={() => setCounterValue(counterValue -1)}>Subtract $1</button>
            <button className="counter-button--subtract" onClick={() => setCounterValue(counterValue -5)}>Subtract $5</button>
            <button className="counter-button--subtract" onClick={() => setCounterValue(counterValue -10)}>Subtract $10</button>
        </div>
    )
}

export default Counter;