import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicks((prevTicks) => prevTicks + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

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
}
