import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css"

function TodoList({todos, onDelete, onChange}) {
    return (
        <div className={styles.todoList}>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList;