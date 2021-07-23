import React from 'react'
import { FaCheckCircle, FaRegTrashAlt } from 'react-icons/fa'
import styles from './toDoItem.module.css'

function ToDoItem({ list, onDelete, onChecked }) {
    const { text } = list
    const handleDelete = () => {
        onDelete(list)
        console.log(list)
    }
    const handleChecked = () => {
        onChecked(list)
    }

    return (
        <li className={styles.item}>
            <FaCheckCircle className={styles.check} onClick={handleChecked} />
            <span>{text}</span>
            <FaRegTrashAlt className={styles.trash} onClick={handleDelete} />
        </li>
    )
}

export default ToDoItem
