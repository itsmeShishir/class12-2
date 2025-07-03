import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtoDo, deleteTodo } from "./redux/todoSlice";
function App() {
  const [inputs, setInputs] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addtoDo(inputs));
    setInputs("");
  }

  const handleDelete = (id)=>{
    dispatch(deleteTodo(id));
  }
  return <div className="mx-auto w-[70vw]">
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 pt-20">
      <input type="text" name="name" placeholder="Enter your todo" value={inputs} onChange={(e)=> setInputs(e.target.value)} className="border border-2 border-black px-4 py-2" />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white">Submit</button>
    </form>
    <ol className="pt-5 flex gap-3 flex-wrap">
      {
        todos.map((items)=>{
          return <li key={items.id} className="bg-green-400 px-4 py-2">{items.text} <button className="px-4 py-2 bg-red-600 text-white rounded-md" 
          onClick={()=> handleDelete(items.id)}>Delete</button></li>
        })
      }
    </ol>
  </div>;
}

export default App;
