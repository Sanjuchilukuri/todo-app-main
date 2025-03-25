import { useContext } from "react";
import { ToDoItemContext } from "../Context/ToDoItemContext";

export function UseToDoItem(){
    return useContext(ToDoItemContext);
}