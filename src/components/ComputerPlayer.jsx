import React, { useEffect } from 'react';

export default function ComputerPlayer(props) {
  
  function generateMoves(board) {
    if (!board || !board.length) {
      return [];
    }
  
    const moves = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === null) {
          moves.push([i, j]);
        }
      }
    }
    return moves;
  }
  

  function selectMove(board) {
    // Select a move at random
    const moves = generateMoves(board);
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  }
  function handleComputerMove() {
    const move = selectMove(props.board || []);

    const newBoard = (props.board || []).slice();
    newBoard[move[0]][move[1]] = props.computerPlayer;
    props.setBoard(newBoard);
  }
  

  useEffect(() => {
    console.log('currentPlayer:', props.currentPlayer);
    console.log('computerPlayer:', props.computerPlayer);
    if (props.currentPlayer === props.computerPlayer) {
      handleComputerMove();
    }
  }, [props.currentPlayer]);

  return <div></div>;
}
