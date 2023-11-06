import React, { useEffect, useState } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
// import data from './assets/json/data';

function App() {
  const [emails, setEmails] = useState(null);
  const searchEmail = (keyword) => {
    const newEmails = data.filter(
      (email) =>
        email.firstName.indexOf(keyword) !== -1 ||
        email.lastName.indexOf(keyword) !== -1 ||
        email.email.indexOf(keyword) !== -1
    );
    setEmails(newEmails);
  };

  useEffect(async () => {
    try {
      const response = await fetch("/api", {
        method: "get",
        header: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div id={"App"}>
      <RegisterForm />
      <SearchBar searchEmail={searchEmail} />
      {emails === null ? null : <Emaillist emails={emails} />}
    </div>
  );
}

export { App };
