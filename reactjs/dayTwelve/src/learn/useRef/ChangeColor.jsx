import { useRef } from "react";

function ChangeColor() {
    const ref = useRef();
    function changeColor(color){
        ref.current.style.backgroundColor = color
    }
  return <>
  <div ref={ref} style={{width: "400px", height: "400px"}}>

  </div>
    
    <button onClick={()=> changeColor("red")}>Red</button>
    <button onClick={()=> changeColor("yellow")}>Yellow</button>
    <button onClick={()=> changeColor("pink")}>Pink</button>
  </>
    
}

export default ChangeColor;
