import React from 'react'
import ToDoItem from './toDoItem'
import styles from './toDoList.module.css'
function ToDoList({ toDo, onDelete, onChecked }) {
    const handleChecked = (list) => {
        onChecked(list)
    }

    const handleDelete = (list) => {
        onDelete(list)
    }

    return (
        <ul className={styles.container}>
            {toDo.map((list) => (
                <ToDoItem
                    key={list.id}
                    list={list}
                    onDelete={handleDelete}
                    onChecked={handleChecked}
                />
            ))}
        </ul>
    )
}

export default ToDoList
