import {createContext, useState} from "react";

export const todoapp = createContext();

function ToDoContext({children}) {
    const [data, SetData] = useState([]);
    const AddToDO = (text) =>{
        SetData([...data, {id: Date.now(), text}])
    }
    const deleteToDo = (id)=>{
        SetData(data.filter((item) => item.id !== id))
    }
  return <todoapp.Provider value={{data, AddToDO, deleteToDo}}>
        {children}
    </todoapp.Provider>;
}

export default ToDoContext;
