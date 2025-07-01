import {createContext, useState , useEffect} from "react";

export const lightanddark = createContext();
function LightAndDark({children}) {
    const [dark, SetDark] = useState(()=>{
        const stored = localStorage.getItem("theme");
        return stored ? stored==="dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(()=>{
        const html = document.documentElement;
        if(dark){
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    },[dark]);

    const ToggleOption = () =>{
        SetDark(!dark);
    }
   
  return(
    <lightanddark.Provider value={{dark,ToggleOption }}>
        {children}
    </lightanddark.Provider>
  )
}

export default LightAndDark;
