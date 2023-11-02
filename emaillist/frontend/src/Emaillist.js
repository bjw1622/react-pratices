import React from "react";
import styles from "./assets/scss/Emaillist.scss";
import Email from "./Email";
const Emaillist = ({ emails }) => {
  return (
    <ul class={styles.Emaillist}>
      {emails.map((email) => {
        return (
          <Email
            firstName={email.firstName}
            lastName={email.lastName}
            email={email.email}
          />
        );
      })}
    </ul>
  );
};

export default Emaillist;