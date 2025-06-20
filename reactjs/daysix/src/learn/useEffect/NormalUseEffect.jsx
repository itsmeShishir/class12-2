import {useState, useEffect} from "react";

function NormalUseEffect() {
    const [count, setCount] = useState(10)
        useEffect(()=>{
            console.log(count);
        },[count])
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

export default NormalUseEffect;
