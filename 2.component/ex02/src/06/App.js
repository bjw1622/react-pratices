import React from "react";
import Header from "./Header";
import styled from "styled-components";

const StyledH1 = styled.h1`
  width: 180px;
  text-align: center;
  margin: 100px auto;
  padding: 20px;
  border: 2px solid #999;
  color: #1144fe;
  background-color: #cdcice;
`;

function App() {
  return (
    <div id={"App"}>
      <Header />
    </div>
  );
}

export { App };
