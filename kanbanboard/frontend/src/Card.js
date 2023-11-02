import React, { useState } from "react";
import TaskList from "./TaskList";
import styles from "./assets/scss/Card.scss";

const Card = ({ cards }) => {
  const [isCheckedList, setIsCheckedList] = useState(cards.map(() => false));

  const clickBtn = (i) => {
    const updatedIsCheckedList = [...isCheckedList];
    updatedIsCheckedList[i] = !updatedIsCheckedList[i];
    setIsCheckedList(updatedIsCheckedList);
  };

  return (
    <>
      {cards.map((card, i) => {
        return (
          <div className={styles.Card} key={card.no}>
            <div className={styles.Card__Title} onClick={() => clickBtn(i)}>
              {card.title}
            </div>
            {isCheckedList[i] === true ? (
              <div className={styles.Card__Details}>
                {card.description}
                {card.tasks.length !== 0 ? <TaskList task={card.tasks} /> : ""}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </>
  );
};

export default Card;
