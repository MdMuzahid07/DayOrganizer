import { ADDED, CLEARCOMPLETEDTASKS, COLORSELECTED, COMPLETEALLTASKS, DELETED, TOGGLED } from "./actionTypes";
import todoInitialState from "./initialState";


const newTodoIdGenerator = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo._id, maxId), -1);
    return maxId + 1;
}


const todoReducer = (state = todoInitialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                {
                    _id: newTodoIdGenerator(state),
                    todoText: action.payload.todoText,
                    todoTitle: action.payload.todoTitle
                }
            ];
        case TOGGLED:
            return state.map(todo => {
                if (todo._id !== action.payload) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            });

        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo._id !== todoId) {
                    return todo
                }

                return {
                    ...todo,
                    color: color
                }
            });

        case COMPLETEALLTASKS:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            });

        case DELETED:
            return state.filter(todo => todo._id !== action.payload);

        case CLEARCOMPLETEDTASKS:
            return state.filter(todo => !todo.completed);

        default:
            return state;
    }
};

export default todoReducer;


