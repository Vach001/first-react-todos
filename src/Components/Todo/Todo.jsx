import TodoInput from "../TodoForm/TodoForm";
import styles from "./Todo.module.css";

export default function Todo() {
  return (
    <div>
    <h1 className={styles.head}>MY TODO</h1>
      <div className={styles.container}>
        <TodoInput />
        
      </div>
      </div>
  );
}
