import React from "react";
import TaskList from "./TaskList";
import styles from "./assets/scss/Card.scss";

const Card = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        return (
          <div class={styles.Card}>
            <div class={styles.Card__Title}>{card.title}</div>
            <div class={styles.Card__Details}>
              {card.description}
              {card.tasks.length !== 0 ? <TaskList task={card.tasks} /> : ""}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
