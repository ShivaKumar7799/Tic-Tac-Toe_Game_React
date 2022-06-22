import { useEffect, useState } from "react";
import Square from "./Square/Square";
import "./Board.css"
function Board(props){
    
    const [squares, setSquares]= useState(Array(9).fill(null));
    const [xTurn, setXTurn ]= useState(true);
    const [countDownValue, setCountDownValue]= useState(10);
    const [intervalId , setIntervalId] = useState()
    
 
    useEffect(()=>{
       setIntervalId(setInterval(() => {
        setCountDownValue((countDownValue)=>{
        
             return countDownValue -1;
       
           
          })
        
       }, 1000)) 
       
//    const interval = setInterval(() => {
//         setCountDownValue((countDownValue)=>{
//             console.log(interval)
//              return countDownValue -1;
        
           
//           })
//        }, 1000)
       
      
    }, []) 
 
  
   
 

    useEffect(() => {
        if(countDownValue === 0){
            setXTurn((xTurn)=>{
               return !xTurn;

            });
            setCountDownValue(10);
           

        }
    }, [countDownValue])  
   

const reset = ()=>{
    setSquares(Array(9).fill(null));
    setXTurn(true);
}
    const calWinner = (is_xTurn)=>{
        let turnValue = is_xTurn? '0': 'X';
        console.log("Line 8", squares, is_xTurn)
        if(squares[0] === turnValue && squares[4] === turnValue && squares[8] === turnValue){
            props.getWinner(turnValue) 
            clearInterval(intervalId);
          
               alert("no more moves now");
               return true;
            
             }
         
       
        if(squares[2] === turnValue && squares[4] === turnValue && squares[6] === turnValue){
            props.getWinner(turnValue);
         clearInterval(intervalId);
          
      

             alert("no more moves now");
             return true;
        }
        if(squares[0] === turnValue && squares[3] === turnValue && squares[6] === turnValue){
            props.getWinner(turnValue);
            clearInterval(intervalId);
            alert("no more moves now");
            return true
        }
        if(squares[1] === turnValue && squares[4] === turnValue && squares[7] === turnValue){
            props.getWinner(turnValue);
            clearInterval(intervalId);
            alert("no more moves now");
            return true
        }
        if(squares[2] === turnValue && squares[5] === turnValue && squares[8] === turnValue){
            props.getWinner(turnValue);
            clearInterval(intervalId);
            alert("no more moves now");
            return true
        }
        if(squares[0] === turnValue && squares[1] === turnValue && squares[2] === turnValue){
            props.getWinner(turnValue);
            clearInterval(intervalId);
            alert("no more moves now");
            return true
        }
        if(squares[3] === turnValue && squares[4] === turnValue && squares[5] === turnValue){
            console.log("Ayush")
            props.getWinner(turnValue);
            clearInterval(intervalId);
             alert("no more moves now");
             return true
        }
        if(squares[6] === turnValue && squares[7] === turnValue && squares[8] === turnValue){
            props.getWinner(turnValue);
            clearInterval(intervalId);
           alert("no more moves now");
          return true
        
        
        }
        let countForNullSquares = 0;
        for(var i=0;i<squares.length;i++){
            if(squares[i] == null){
                countForNullSquares++;
            }
            
        }
        if(countForNullSquares == 0){
            alert("No one win ")
        }

        return false





        // else{
        //     console.log("no one is winner")
         
            
        // }
     
        // return  ( props.getnowinner("no one is winner"))
      
    }
    useEffect(()=>{
       if(!calWinner(xTurn)){
        setCountDownValue(10);
         }
        },[squares, xTurn]);
   
   
    const  handleClick =  (i)=>{
       if(squares[i]===null && props.winnerMessage === ''){
        setXTurn((turn)=>!turn);
        const square = squares.slice();
       
        if(xTurn){
            square[i] = 'X';
        } else{
            square[i] = '0';
        }  
        setSquares(square);
      
        // clearInterval(intervalId)
        
        console.log(`"square" ${square}`)
    } else{
        alert('Cant update the filled block')
    }
   

      }
        
    const renderSquare = (i)=>{                                                   //first step
        return <Square value={squares[i]} onClick={()=>{handleClick(i)}} />;
      }
      const status = `Player: ${xTurn? 'X': '0'}`;
      
    
    return <>
    <h2>TIC-TAC-TOE </h2>
    <div className="container">
            <div className="status">{status}</div>
          
            <tr>
                <td>{renderSquare(0)}</td>
                <td>{renderSquare(1)}</td>
                <td>{renderSquare(2)}</td>
            </tr>
            <tr>
                <td>{renderSquare(3)}</td>
                <td>{renderSquare(4)}</td>
                <td>{renderSquare(5)}</td>
            </tr>
            <tr>
                <td>{renderSquare(6)}</td>
                <td>{renderSquare(7)}</td>
                <td>{renderSquare(8)}</td>
            </tr>
  
        <button className="set_btn" onClick={reset}>Reset</button>
      
   <span className="count">{countDownValue}</span> 
      
        </div>

           
        </>;
}
export default Board;