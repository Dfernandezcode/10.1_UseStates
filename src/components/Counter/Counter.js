import "./Counter.css";

const Counter = () => {

    const [counterValue, setCounterValue] = React.useState(0);



    return (
        <div>
            <p>El valor actual es: {counterValue}</p>
            <button>Add 1</button>
            <button>Add 5</button>
            <button>Add 10</button>
        </div>
    )
}

export default Counter;