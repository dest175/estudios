import React, { useState } from "react";
import { useReducer } from "react";
type ToDo ={
    id: number;
    text: string;
}

type State = {
    ToDos : ToDo[]; 
}

type Action = 
| {type: "ADD_TODO"; payload: string}
| {type: "REMOVE_TODO"; payload: number}

const initialState: State = {
    ToDos: [],
}

const todoReducer = (state: State, action:Action) => {
    switch(action.type){
        case "ADD_TODO":
            {
                 const newToDo: ToDo = {id: state.ToDos.length + 1, text:action.payload}
                    return{ ToDos: [...state.ToDos, newToDo]}
        }
        case "REMOVE_TODO":
            return{ ToDos: state.ToDos.filter(ToDo => ToDo.id !== action.payload)}
        default: 
        return state;
    }
}

const emojiMap:{[key: string]:string} = {
    eat:"🍔",
    sleep:"🦐",
    exercise:"🏃‍♂️",
    drinkwater:"🥛",
    matarmancos: "☠️🐸",
};

const ToDoList : React.FC = ()=>{
    const [state, dispatch]= useReducer(todoReducer, initialState);
    const [todoText, setTodoText]= useState("");
    const handleAddTodo = ()=>{
    const mappedText = emojiMap[todoText.toLowerCase() || todoText]
        if (mappedText.trim()) {
            dispatch({ type: "ADD_TODO", payload: mappedText})
            setTodoText("")
        }
    }
    const handleKeyDown =(e: React.KeyboardEvent) => {
        if(e.key==="Enter"){
            handleAddTodo();
        }
    }
    return (
        <div>
            <em>Made with useReducerXDbite</em>
            <h1>emoji Todo List</h1>
            <input type="text" value={todoText} onChange={(e)=> setTodoText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new Todo" />
            <ul>
                {
                    state.ToDos.map((ToDo)=>(
                        <li 
                        key={ToDo.id}
                        onClick={ () => dispatch({type: "REMOVE_TODO", payload: ToDo.id})}
                        >
                            {ToDo.text}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default ToDoList