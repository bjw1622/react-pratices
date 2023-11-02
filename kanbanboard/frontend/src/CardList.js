import React, { useState } from "react";
import Card from "./Card";
import styles from "./assets/scss/CardList.scss";

const CardList = ({ title, cards }) => {
  return (
    <div className={styles.CardList}>
      <h1>{title}</h1>
      <Card cards={cards} />
    </div>
  );
};

export default CardList;
