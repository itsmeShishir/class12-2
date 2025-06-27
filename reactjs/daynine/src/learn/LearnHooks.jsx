import React from "react";
import SliderApp from "./useState/SliderApp";
import Counter from "./useState/Counter";
// import NormalUseEffect from "./useEffect/NormalUseEffect";
// import ApiFetch from "./useEffect/ApiFetch";
import ChangeColor from "./useRef/ChangeColor";
import SliderPage from "./useReducer/SliderPage";
import RerenderPage from "./useMemo/rerenderPage";
import JustCallBack from "./useCallback/JustCallBack";

function LearnHooks() {
  return <div>
    <Counter />
    <SliderApp />
    {/* <NormalUseEffect />
    <ApiFetch /> */}
    <ChangeColor />
    <SliderPage />
    <RerenderPage />
    <JustCallBack />
  </div>;
}

export default LearnHooks;
