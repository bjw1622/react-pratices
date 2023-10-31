import React from "react";
import Header from "./Header";

/*   
    리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다

    오류:
    return (
        <h2>01</h2>
        <p></p>
    )
    
    이유 :
      React.createElement('h2', null, '01')
 */
function App() {
  return (
    <>
      <Header />
      <Contetn />
    </>
  );
}

export default App;
