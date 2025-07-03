import React, { useCallback, useState } from "react";
function JustCallBack() {
    const [state, setState] = useState(0);
    const [OtherState, setOtherState] = useState(0);
    
    console.log("rendering ...");
    

    // const increment = ()=>{
    //     console.log("Increment ...");
    //     setState(state + 1)
    // }

    const increment = useCallback(()=>{
        console.log("Increment ...");
        setState((prev)=> prev + 1)
    },[])
   
  return <>
  <p>{state}</p>    
  <p>{OtherState}</p>
    <button onClick={increment}>Click increment</button>
    <button onClick={()=> setOtherState(OtherState + 1)}>Click increment</button>
  </>;
}
export default JustCallBack;
