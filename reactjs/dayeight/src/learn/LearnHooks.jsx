import React from "react";
import SliderApp from "./useState/SliderApp";
import Counter from "./useState/Counter";
// import NormalUseEffect from "./useEffect/NormalUseEffect";
// import ApiFetch from "./useEffect/ApiFetch";
import ChangeColor from "./useRef/ChangeColor";

function LearnHooks() {
  return <div>
    <Counter />
    <SliderApp />
    {/* <NormalUseEffect />
    <ApiFetch /> */}
    <ChangeColor />
  </div>;
}

export default LearnHooks;
