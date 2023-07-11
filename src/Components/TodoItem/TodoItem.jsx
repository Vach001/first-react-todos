import styles from "./TodoItem.module.css";
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@mui/material";

function TodoItem({ todo, onChange, onDelete }) {
  return (
    <Box className={styles.todoListItem}>
          <FormControlLabel
              label={todo.text}
              control={
                  <Checkbox
                      defaultRequered
                      aria-checked={todo.isCompleted}
                      onChange={(e) => {
                          onChange({
                              ...todo,
                              isCompleted: e.target.checked,
                          });
                      }}
                  />}
          />
      <Button
        className={styles.todoListItemDelete}
        onClick={() => {
          onDelete(todo);
        }}
      >
        X
      </Button>
    </Box>
  );
}

export default TodoItem;
