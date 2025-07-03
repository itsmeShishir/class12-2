import React, { useState, useContext } from "react";
import { todoapp } from "./ContextApi/ToDoContext";

function TodoApp() {
    const {data, AddToDO, deleteToDo} = useContext(todoapp);
    const [task, setTask] = useState("");
    const submitTodo = (e) => {
        e.preventDefault();
        if(task.trim()){
            AddToDO(task);
            setTask("");
        }
    }
  return <div>
    <form onSubmit={submitTodo}>
        <input type="text" className="border" value={task} onChange={(e) => setTask(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
    <ol>
        {
            data.map((item) => {
                return <li key={item.id}>{item.text} <button onClick={() => deleteToDo(item.id)}>Delete</button></li>
            })
        }
    </ol>
  </div>;
}

export default TodoApp;
