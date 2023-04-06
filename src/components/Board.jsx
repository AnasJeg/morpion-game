import React, { useState } from "react";
import Square from "./Square";
import "./board.css";

export default function Board(props) {
 
  function squ(x) {
    return <Square value={props.values[x]} onClick={() => props.onClick(x)} />;
  }
  return (
    <div>
      <div className="board-row">
        {squ(0)}
        {squ(1)}
        {squ(2)}
      </div>
      <div className="board-row">
        {squ(3)}
        {squ(4)}
        {squ(5)}
      </div>
      <div className="board-row">
        {squ(6)}
        {squ(7)}
        {squ(8)}
      </div>
    </div>
  );
}
