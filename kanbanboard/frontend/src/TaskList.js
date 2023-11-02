import React from "react";
import styles from "./assets/scss/TaskList.scss";

const TaskList = ({ task }) => {
  return (
    <div className={styles.TaskList}>
      <ul>
        {task.map((t) => {
          return (
            <li className={styles.TaskList__Task} key={t.no}>
              <input type="checkbox" checked={t.done} onChange={() => {}} />{" "}
              {t.name}
              <a href="#" className={styles.TaskList__Task_remove}></a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
