import styles from "./TodoFooter.module.css";
import { Chip } from "@mui/material";

function TodoFooter({ todos, onClearCompleted }) {
  const completedSize = todos.filter((todo) => todo.isCompleted).length;
  const clearCompleted = () => {
    onClearCompleted(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div className={styles.todoAppFooter}>
      <span>
        {completedSize}/{todos.length} Completed
      </span>
      <Chip
        label="Delete Completed"
        onClick={onClearCompleted}
        onDelete={clearCompleted}
        deleteIcon={"none"}
        variant="outlined"
        sx={{
          justifyContent: "flex-end",
          display: "flex",
          marginTop: "-25px",
          marginLeft: "60%",
          color: "red",
        }}
      />
    </div>
  );
}

export default TodoFooter;
