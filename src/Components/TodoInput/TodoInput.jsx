import React from 'react'
import styles from "./TodoInput.module.css"

function TodoInput() {
  return (
    <div>
        <input className={styles.todoInput} type="text" />
        <button className={styles.btnAdd}>Add</button>
    </div>
  )
}

export default TodoInput