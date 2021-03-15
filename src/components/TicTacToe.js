import Square from "./Eachsquare"

import {useState,useEffect} from 'react'


function TicTacToe() {
    const [array,setarray] = useState(Array(9).fill(null))
    const [xturn,oturn]=useState(true)
    const winner = calculateWinner(array);
        var status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (xturn ? 'X' : 'O');
        }
    const handleclick =(index)=>{
      if (!(winner)){
        
        
        var sqarr = [...array] 
        if (sqarr[index]==null)
        {
        sqarr[index] = xturn ? 'x' : 'o'
        setarray(sqarr)
        oturn(!xturn)
        }
      }
        
    }
    function Rendereachsquare(i){
        return (<Square value={array[i]} 
           handleclick = {handleclick}
            index = {i}/>)
    }
    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }
    return(
        <div className="col">
          <div className="statuss">{status}</div>
        <div className="r1">
        {Rendereachsquare(0)}
        {Rendereachsquare(1)}
        {Rendereachsquare(2)}
        </div>
        <div className="r2">
        {Rendereachsquare(3)}
        {Rendereachsquare(4)}
        {Rendereachsquare(5)}
        </div>
        <div className="r3">
        {Rendereachsquare(6)}
        {Rendereachsquare(7)}
        {Rendereachsquare(8)}
        </div>
        </div>


    )
    
    }
export default TicTacToe