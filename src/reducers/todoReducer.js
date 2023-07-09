import {nameActionOptions} from "../constants/actions.constants";
import {v4} from "uuid";

export function todoReducer(state, action) {
    const {ADD, DELETE, COMPLETED, UPDATE} = nameActionOptions;
    const {payload} = action;


    switch (action.type) {
        case ADD :
            return [
                ...state,
                {
                    id: v4(),
                    text: payload.text,
                    isCompleted: false,
                },
            ];
        case DELETE :
            return state.filter(({id:todoId}) => todoId !== payload.id);
        case UPDATE :
            return state.map((todo) => {
                if (todo.id === payload.updatedTodo.id) {
                    return payload.updatedTodo;
                }
                return todo;
            });
        case COMPLETED :
            return state.filter(({isCompleted}) => !isCompleted);
        default: return  state;
    }
}
