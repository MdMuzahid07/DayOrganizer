import { ADDED, CLEARCOMPLETEDTASKS, COLORSELECTED, COMPLETEALLTASKS, TOGGLED } from "./actionTypes"



export const added = (todoTitle, todoText) => {
    return {
        type: ADDED,
        payload: {
            todoTitle: todoTitle,
            todoText: todoText
        }
    }
};



// this action for todo app complete, incomplete toggled
export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
};



export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
};


export const completeAllTasks = () => {
    return {
        type: COMPLETEALLTASKS
    }
};

export const clearAllCompleted = () => {
    return {
        type: CLEARCOMPLETEDTASKS
    }
};
