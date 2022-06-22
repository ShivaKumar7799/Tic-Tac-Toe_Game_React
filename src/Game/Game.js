 
 import './Game.css'
 import Board from './Board/Board';
 import {useState} from 'react';
import Square from './Board/Square/Square';
 function Game(props){
     const [winnerMessage, setWinnerMessage]= useState('');
    //  const [nowinner, setnowinner]= useState('');
 
   
     const getWinner = (winner)=>{
         console.log("Winner is called", winner)
       
         if(winner){
             return setWinnerMessage(`The Winner is ${winner}`);
            //  clearInterval(props.intervalId)
            //  clearInterval(props.intervalId)
            //  console.log("intervalid" ,props.intervalId)
          
                                    //reset the board
           }
           else{
             console.log("no one is winner")
           return  setWinnerMessage(`No one is winner`)    //to ask
           }
          
          }
          
           
          
          

    //  const reset_btn = () => {
    //    console.log("btn is reset")
    //    let newarr = props.Squares.map((s)=>(s = null))
    //    props.setsquares(newarr)
    //    setWinnerMessage("")

    //  }
    //  props.setSquares(null) 
     
      return (
         <div className="game">
           <div className="game-board">
             <Board getWinner={getWinner}  winnerMessage={winnerMessage}/>
           </div>
           <div className="game-info">
             <div>{winnerMessage}</div>
            
           
           </div>
           {/* <button onClick={()=>reset_btn()}>Reset</button> */}
         </div>
       );;
 }
 export default Game;
 
 
 
 
