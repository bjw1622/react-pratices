import React from "react";

// 1. 속성은 Camel Case
// 2. Element 꼭 닫는다.
// 3. JSX Element의 속성 이름은 DOM API와 일치한다
function App() {
  return (
    <div className="App">
      <h1>01</h1>
      <p>특징1: HTML과의 차이점</p>
      <input type="text" maxLength="10" />
      <br />
      <hr />
      <img src="" alt="" />
      <h4 id={"title"} className={"header"}>
        타이틀
      </h4>
    </div>
  );
}

export default App;
