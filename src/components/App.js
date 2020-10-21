import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [paragraph,setParagraph] =React.useState("");
  handleClick = (event) => {
    setParagraph("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  };
  return (
    <div id="main">
           <Button id="click" onClick={(event) => handleClick(event)}>
          para
        </Button>
        <p id="para">{paragraph}</p>
    </div>
  );
}


export default App;
