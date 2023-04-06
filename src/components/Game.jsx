import React, { useState } from "react";
import Board from "./Board";
import './game.css'

export default function Game(gameMode) {
  const [turn, setTurn] = useState("x");
  const [values, setValues] = useState(Array(9).fill(null));
  const [win, setWin] = useState();
  const matrice = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkwinner = (squ) => {
    for (let i in matrice) {
      const [a, b, c] = matrice[i];
      if (squ[a] && squ[a] === squ[b] && squ[a] === squ[c]) {
        setWin(squ[a]);
        return squ[a];
      }
    }
    return null;
  };

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
    checkwinner(squ);
    setValues(squ);
  }

  const newGame =()=>{
    setValues(Array(9).fill(null));
    setWin(null);
  }

  return (
    <div>
      <h1>player {turn}</h1>
      <Board values={values} onClick={onClick} />
     
      {win && (
        <>
        <h3>{win} is the winner 🎉</h3>
        <button className="btn" onClick={newGame}> Nouvelle partie </button>
        </>
      )
      }
    </div>
  );
}
