import { useState, useReducer } from "react";
import styles from "./Todo.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import TodoFooter from "../TodoFooter/TodoFooter";

function reducer(state, action) {
  if (action.type === "add") {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false,
      },
    ];
  } else if (action.type === "delete") {
    return state.filter((t) => t.id !== action.payload.id);
  } else if (action.type === "clear-completed") {
    return state.filter((todo) => !todo.isCompleted);
  } else if (action.type === "update") {
    return state.map((todo) => {
      if (todo.id === action.payload.updatedTodo.id) {
        return action.payload.updatedTodo;
      }
      return todo;
    });
  }
}

function Todo() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false,
    },
  ]);

  return (
    <div className={styles.todoApp}>
      <header>
        <h1 className={styles.todoAppTitle}>TODOS</h1>
      </header>

      <TodoForm
        onAdd={(text) => {
          dispatch({
            type: "add",
            payload: {
              text,
            },
          });
        }}
      />
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          dispatch({
            type: "delete",
            payload: {
              id: todo.id,
            },
          });
        }}
        onChange={(newTodo) => {
          dispatch({
            type: "update",
            payload: {
              updatedTodo: newTodo,
            },
          });
        }}
      />
      <TodoFooter
        todos={todos}
        onClearCompleted={() => {
          dispatch({
            type: "clear-completed",
          });
        }}
      />
    </div>
  );
}

export default Todo;
