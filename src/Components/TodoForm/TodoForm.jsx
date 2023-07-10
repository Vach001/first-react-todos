import { useState } from "react";
import { Button, TextField} from "@mui/material";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [label, setLabel] = useState(". . .");
  const handleClick = (e) => {
      e.preventDefault();
      onAdd(text);
      setText("");
  }

  return (
    <TextField
        sx={{width: "100%"}}
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
            endAdornment: <Button variant="contained" onClick={handleClick}>ADD</Button>
        }}
    />
  );
}

export default TodoForm;
