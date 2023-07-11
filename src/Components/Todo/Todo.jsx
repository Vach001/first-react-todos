import { useEffect, useReducer } from "react";
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
  const [todos, dispatch] = useReducer(
    todoReducer,
    JSON.parse(getStorage("todosState")) ?? []
  );
  const { COMPLETED, ADD, UPDATE, DELETE } = nameActionOptions;

  useEffect(() => {
    setStorage("todosState", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        sx={{ mt: "20px" }}
        className={styles.todoAppTitle}
      >
        TODOS
      </Typography>

      <Box className={styles.todoApp}>
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
          onDelete={({ id }) => {
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
      </Box>
    </>
  );
}

export default Todo;
