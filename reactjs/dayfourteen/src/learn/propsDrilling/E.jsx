import { useContext } from "react";
import { incanddec } from "../ContextApi/INcDEcContext";
function E() {
  const {value} = useContext(incanddec);
  return <div>
    <h1>
        From E component value = {value}
    </h1>
  </div>
}

export default E;
