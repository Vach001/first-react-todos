import { useReducer } from "react";
import styles from "./Todo.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import TodoFooter from "../TodoFooter/TodoFooter";
import {nameActionOptions} from "../../constants/actions.constants";
import {todoReducer} from "../../reducers/todoReducer";
import {v4} from "uuid";

const getStorage = (value) => localStorage.getItem(value);
const setStorage = (key, value) => localStorage.setItem(key, value);
const removeStorage = (value) => localStorage.removeItem(value);

function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, [
    {
      id: v4(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: v4(),
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: v4(),
      text: "Learn React",
      isCompleted: false,
    },
  ]);

  const {COMPLETED, ADD, UPDATE, DELETE} = nameActionOptions;

  return (
    <div className={styles.todoApp}>
      <header>
        <h1 className={styles.todoAppTitle}>TODOS</h1>
      </header>

      <TodoForm
        onAdd={(text) => {
          dispatch({
            type: ADD,
            payload: {
              text,
            },
          });
        }}
      />
      <TodoList
        todos={todos}
        onDelete={({id}) => {
          dispatch({
            type: DELETE,
            payload: {
                id,
            },
          });
        }}
        onChange={(updatedTodo) => {
          dispatch({
            type: UPDATE,
            payload: {
              updatedTodo,
            },
          });
        }}
      />
      <TodoFooter
        todos={todos}
        onClearCompleted={() => {
          dispatch({
            type: COMPLETED,
          });
        }}
      />
    </div>
  );
}

export default Todo;
