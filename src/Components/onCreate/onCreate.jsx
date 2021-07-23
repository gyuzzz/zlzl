import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import styles from './onCreate.module.scss'
function OnCreate() {
    const formAdd = () => {
        return (
            <div className={styles.container}>
                <form>
                    <input type="text" placeholder="할일을 입력하세요" />
                    <button type="submit">
                        <FaPlusCircle />
                    </button>
                </form>
            </div>
        )
    }
    return <FaPlusCircle className={styles.icon} onClick={formAdd} />
}

export default OnCreate
