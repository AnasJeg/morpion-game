import React, { useState } from 'react'
import Square from './Square'
import './board.css'

export default function Board(props) {
    const [turn, setTurn]=useState('x')
    const [values, setValues] = useState(Array(9).fill(null))
    function  onClick (x){
       // alert('click '+ x)
       if(values[x] !== null){
        alert('!!!') 
        return;
       }
     let  squ = [...values]
        if(turn === 'x'){
        squ[x]='x'
        setTurn('o')
        }
        else{
        squ[x]='o'
        setTurn('x')
        }
       // console.log(squ)
        setValues(squ)
   
    }
    function squ (x) {
        return(
           <Square value={values[x]} onClick={()=>onClick(x)}/>
        );
    }
  return (
        <div>
            <h2>Play {turn}</h2>
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
  )
}
