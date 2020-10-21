import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [paragraph,setParagraph] =React.useState("");
  handleClick = (event) => {
    setParagraph("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  };
  return (
    <div id="main">
           <Button id="para" onClick={(event) => handleClick(event)}>
          para
        </Button>
        <p>{paragraph}</p>
    </div>
  );
}


export default App;
