import styles from "./TodoItem.module.css";

function TodoItem({ todo, onChange, onDelete }) {
  return (
    <div className={styles.todoListItem}>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(e) => {
            onChange({
              ...todo,
              isCompleted: e.target.checked,
            });
          }}
        />
        {todo.text}
      </label>
      <button
        className={styles.todoListItemDelete}
        onClick={() => {
          onDelete(todo);
        }}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
