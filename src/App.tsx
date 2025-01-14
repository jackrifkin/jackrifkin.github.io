import React from "react";
import "./App.css";
import BubbleHeader from "./components/BubbleHeader/BubbleHeader";

function App() {
  return (
    <>
      <BubbleHeader />
      <div className="seaweed">
        <img src="./seaweed_left.png" alt="seaweed_left" />
        <img src="./seaweed_right.png" alt="seaweed_right" />
      </div>
    </>
  );
}

export default App;
