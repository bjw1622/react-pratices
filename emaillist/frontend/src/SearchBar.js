import React from "react";
import styles from "./assets/scss/SearchBar.scss";

const SearchBar = () => {
  return (
    <div class={styles.Searchbar}>
      <input type="text" placeholder="찾기" />
    </div>
  );
};

export default SearchBar;
