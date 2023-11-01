import React from "react";
import data from "./assets/json/data";
import CardList from "./CardList";
import styles from "./assets/scss/Kanbanboard.scss";

function Kanbanboard(props) {
  const cardsToDo = data.filter((card) => card.status === "ToDo");
  const cardsDone = data.filter((card) => card.status === "Done");
  const cardsDoing = data.filter((card) => card.status === "Doing");

  return (
    <div className={styles.Kanbanboard}>
      <CardList title={"To Do"} cards={cardsToDo} />
      <CardList title={"Doing"} cards={cardsDone} />
      <CardList title={"Done"} cards={cardsDoing} />
    </div>
  );
}

export default Kanbanboard;
