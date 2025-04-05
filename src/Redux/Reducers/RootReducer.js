import { combineReducers } from "redux"
import ThemeReducer from "./ThemeReducer"
import TodoItemReducer from "./TodoItemReducer"

export const RootReducer = combineReducers({
    Theme: ThemeReducer,
    TodoItems: TodoItemReducer
});