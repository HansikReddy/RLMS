import React from "react";
import ReactDOM from "react-dom";

import data from "../hospital/dataArea.json";
import '.././hospital/Board.css';
import Board from "react-trello";

function ManageArea() {
  return (
    <div className="App">
      
      <Board data={data} draggable />
    </div>
  );
}

export default ManageArea;
