import { combineReducers } from "redux";
import todoReducer from "./features/todos/todoReducer";



const rootRecducer = combineReducers({
    todos: todoReducer
});


export default rootRecducer;