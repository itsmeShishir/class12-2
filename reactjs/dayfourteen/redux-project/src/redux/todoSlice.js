import { createSlice } from "@reduxjs/toolkit";
let nextid = 1;
// loaddatafrom localstorage
const loaddatafromlocalstorage = () => {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
}
// save data to localstorage
const savedatafromlocalstorage = (data) => {
    localStorage.setItem('todos', JSON.stringify(data));
}
const initialState = {
    todos: loaddatafromlocalstorage()
};
export const todoslice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addtoDo:(state , action) => {
            state.todos.push({
                id: nextid++,
                text: action.payload,
            });
            savedatafromlocalstorage(state.todos);
        }, 
        deleteTodo:(state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            savedatafromlocalstorage(state.todos);
        }
    }
})
export const {addtoDo, deleteTodo} = todoslice.actions;
export default todoslice.reducer