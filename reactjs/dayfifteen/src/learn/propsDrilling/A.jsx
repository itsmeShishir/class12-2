import React, {useContext} from "react";
import B from "./B";
import { incanddec } from "../ContextApi/INcDEcContext";
function A() {
  const {incValue, decValue} = useContext(incanddec);
  return <div>
    <h1>From From A name = shihsir</h1>
    <button onClick={incValue}>inc</button>
    <button onClick={decValue}>dec</button>
    <B />
  </div>;
}

export default A;
