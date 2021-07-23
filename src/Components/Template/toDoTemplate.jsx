import React from 'react'
import styles from './toDoTemplate.module.scss'
const ToDoTemplate = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}

export default ToDoTemplate
