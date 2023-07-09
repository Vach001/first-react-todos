import { useState } from "react";
import styles from "./TodoForm.module.css";
import {TextField} from "@mui/material";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [label, setLabel] = useState(". . .");

  return (
    <form
      className={styles.todoAppForm}
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      {/*  Todo: Not Material ui*/}
      {/*<input*/}
      {/*  className={styles.todoInput}*/}
      {/*  placeholder={"Write to add . . ."}*/}
      {/*  type="text"*/}
      {/*  value={text}*/}
      {/*  onChange={(e) => {*/}
      {/*    setText(e.target.value);*/}
      {/*  }}*/}
      {/*/>*/}

        <TextField
            label={`Write to add ${label}`}
            onFocus={() => setLabel("")}
            onBlur={() => setLabel(". . .")}
            multiline
            maxRows={4}
            value={text}
            onChange={(e) => {
                setText(e.target.value);
            }}
            InputProps={{
                endAdornment: <button className={styles.todoAppAddButton}>Add</button>
            }}
        />

    </form>
  );
}

export default TodoForm;
