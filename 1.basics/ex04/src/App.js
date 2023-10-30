import React from "react";

function App() {
  // const App = document.createElement("div");
  // App.textContent = "Hello World";
  // const App = React.createElement("div", null, "Hello World");
  // return App;

  return (
    <div>
      Hello Worlddad
      <ul>
        {[].map(() => {
          return <li></li>;
        })}
      </ul>
    </div>
  );
}

export { App };
