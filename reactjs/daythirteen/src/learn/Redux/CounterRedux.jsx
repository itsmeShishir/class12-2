import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decValue, incValue } from "./CounterSlice";
function CounterRedux() {
    const dispatch = useDispatch()
    const count = useSelector((state)=> state.counter.value)
  return <div>
    {count}
    <button onClick={()=> dispatch(incValue())}>inc Value</button>
    <button onClick={()=> dispatch(decValue())}>dec Value</button>
  </div>;
}

export default CounterRedux;
