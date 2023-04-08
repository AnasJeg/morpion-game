import React, { useState } from "react";
import Board from "./Board";
import "../style/game.css";
import ComputerPlayer from "./ComputerPlayer";

export default function Game(props) {
  const [turn, setTurn] = useState("x");
  const [values, setValues] = useState(Array(9).fill(""));
  const [win, setWin] = useState();
  const [gameMode, setGameMode] = useState(null);
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
    if (values[x] !== "") {
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

  const newGame = () => {
    setValues(Array(9).fill(""));
    setWin(null);
  };

  return (
    <div>
      <h1>🎮 {turn}</h1>

      <div className="game-info">
        {gameMode ? (
          gameMode === "play-vs-computer" ? (
            <div>
              <ComputerPlayer />
              Vous jouez contre l'ordinateur
            </div>
          ) : (
            <div>
              <Board values={values} onClick={onClick} />
              Vous jouez contre un ami
              {win ? (
                <>
                  <h3>🎉 {win} is the winner 🎉</h3>
                  <button className="btn" onClick={newGame}>
                    Nouvelle partie{" "}
                  </button>
                </>
              ) : (
                win === null && (
                  <>
                    <h3>Match nul</h3>
                    <button className="btn" onClick={newGame}>
                      {" "}
                      Nouvelle partie{" "}
                    </button>
                  </>
                )
              )}
            </div>
          )
        ) : (
          <div>
            <button className="btn"  onClick={() => setGameMode("play-vs-computer")}>
              Jouer vs computer
              
            </button>
           <br/><br/><br/><br/>
            <button  className="btn" onClick={() => setGameMode("play-vs-friend")}>
              Jouer vs ami
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
