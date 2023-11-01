import React from "react";
import styles from "./assets/scss/TaskList.scss";

const TaskList = ({ task }) => {
  console.log(task);
  return (
    <div class={styles.TaskList}>
      <ul>
        {task.map((t) => {
          return (
            <li class={styles.TaskList__Task}>
              <input type="checkbox" checked={t.done} /> {t.name}
              <a href="#" class={styles.TaskList__Task_remove}></a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
