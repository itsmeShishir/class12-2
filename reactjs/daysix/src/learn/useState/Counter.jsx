import { useState } from "react";
// hooks -> are a building block of react
// function base application

function Counter() {
    const [count, setCount] = useState(10)
    // console.log("count", count);
    // console.log(setCount);
    function reset() {
        setCount(0)
    }
    return <div>
        <button onClick={()=> setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button onClick={()=> setCount(count - 1)}>-</button>
        <button onClick={reset}>Reset</button>
    </div>;
}

export default Counter;
