import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  
  return (
    <form
      className={styles.todoAppForm}
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        className={styles.todoInput}
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className={styles.todoAppAddButton}>Add</button>
    </form>
  );
}

export default TodoForm;
