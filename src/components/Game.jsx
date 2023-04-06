import React, { useState } from "react";
import Board from "./Board";

export default function Game(props) {
    const [turn, setTurn] = useState("x");
    const [values, setValues] = useState(Array(9).fill(null));
    function onClick(x) {
      // alert('click '+ x)
      if (values[x] !== null) {
        alert("!!!");
        return;
      }
      let squ = [...values];
      if (turn === "x") {
        squ[x] = "x";
        setTurn("o");
      } else {
        squ[x] = "o";
        setTurn("x");
      }
      // console.log(squ)
      setValues(squ);
    }

  return (
    <div>
        <h1>player {turn}</h1>
      <Board values={values} onClick={onClick}/>
      <button> Nouvelle partie </button>
    </div>
  );
}
