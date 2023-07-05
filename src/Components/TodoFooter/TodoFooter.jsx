import styles from "./TodoFooter.module.css"

function TodoFooter({todos, onClearCompleted}) {

    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div className={styles.todoAppFooter}>
            <span>{completedSize}/{todos.length} Completed</span>
            <button 
                className={styles.todoClearCompleted}
                onClick={onClearCompleted}
            >Clear All Completed</button>
        </div>
    )
}

export default TodoFooter;