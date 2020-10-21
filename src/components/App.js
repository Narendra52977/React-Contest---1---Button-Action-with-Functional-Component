import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [paragraph, setParagraph] = React.useState("");
  const handleClick = (event) => {
    setParagraph(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };
  return (
    <div id="main">
      <button id="click" onClick={(event) => handleClick(event)}>
        para
      </button>
      <p id="para">{paragraph}</p>
    </div>
  );
}

export default App;
