import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

const App = () => {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  const [ticks, setTicks] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTicks(ticks + 1);
    }, 1000);
    console.log(interval);
    return () => {
      clearInterval(interval);
    };
  }, [ticks]);

  return (
    <>
      <Clock
        message={`ex05: Ticks | ${ticks}`}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </>
  );
};
export default App;
