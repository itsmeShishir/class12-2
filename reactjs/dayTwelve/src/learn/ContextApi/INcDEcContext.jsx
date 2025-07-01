import { createContext, useState } from "react";

export const incanddec = createContext();

// export default incanddec;
function INcDEcContext({children}) {
    const [value, setValue] = useState(0);
    const incValue = () =>{
        setValue(value + 1);
    }
    const decValue = () =>{
        setValue(value - 1);
    }
  return (
    <incanddec.Provider value={{value, incValue, decValue}}>
        {children}
    </incanddec.Provider>
  );
}
export default INcDEcContext;
