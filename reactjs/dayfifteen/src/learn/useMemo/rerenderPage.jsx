import React, { useMemo, useState } from "react";
function RerenderPage() {
    const [state, setState] = useState(0);
    const [OtherState, setOtherState] = useState(0);
    // function ClickMe(){
    //     for(let i = 0 ; i < 1000000000; i++){ 
    //     }
    //     setState(state + 1)
    // }
    const ClickMe = useMemo(()=>{
           console.log("rerender exponsive Component");
           let total = 0;
           for (let i = 0; i < 1000000000; i++) {
               total += 1;
           }
           return total + state
    },[state])
  return <>
  <p>{ClickMe}</p>    
  <p>{OtherState}</p>
    <button onClick={()=> setState(state + 1)}>Click increment</button>
    <button onClick={()=> setOtherState(OtherState + 1)}>Click increment</button>
  </>;
}
export default RerenderPage;
