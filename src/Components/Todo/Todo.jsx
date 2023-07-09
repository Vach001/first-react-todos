import {useEffect, useReducer} from "react";
import styles from "./Todo.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import TodoFooter from "../TodoFooter/TodoFooter";
import {nameActionOptions} from "../../constants/actions.constants";
import {todoReducer} from "../../reducers/todoReducer";
import {getStorage, setStorage} from "../../helpers/localstorage";

function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, JSON.parse(getStorage("todosState")) ?? []);
  const {COMPLETED, ADD, UPDATE, DELETE} = nameActionOptions;

  useEffect(() => {
      setStorage("todosState", JSON.stringify(todos));
  }, [todos])

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
