import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import cardData from "./data";
import './App.css';

function App() {
  const card = cardData.map(data => {
    return (
    <Cards 
      key = {data.id}
      data = {data}
      length = {cardData.length}
    />
    )
  })
  return (
    <div className="App">
      <Header />
      <div className="main">
        {card}
      </div>
    </div>
  );
}

export default App;
