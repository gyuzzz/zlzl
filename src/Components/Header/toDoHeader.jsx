import React from "react";
import { nowDay, yearMonthDate } from "./toDoHeader-day";
import styles from "./toDoHeader.module.scss";
const ToDoHeader = ({ toDo }) => {
  const restWork = toDo.filter((item) => {
    return item.done === true;
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.year}>{yearMonthDate}</h1>
      <h3 className={styles.day}>{nowDay}</h3>
      <p className={styles.restWork}>할일 {restWork.length}개 남음</p>
    </div>
  );
};

export default ToDoHeader;
