import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import { Box } from "@mui/material";

function TodoList({ todos, onDelete, onChange }) {
  return (
    <Box className={styles.todoList}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
          />
        );
      })}
    </Box>
  );
}
export default TodoList;