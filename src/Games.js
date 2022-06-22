import { useState } from 'react';
import Buttons from './Buttons';
import './index.css';

function Game(){
  let count =0
  const [btn_click, set_btn] =useState(count);

   function button_click1(btn){
    console.log(count+1)
     count =count+1
     if(count % 2 === 0){
      set_btn("x")
    
     }
     else
     {
      set_btn("0") 
     }
   
    
   }
 
  return(

    <>
    <p id='player'></p>
    <p id="verdict">The game is still going on </p>
    <Buttons click={button_click1(0)}>{btn_click}</Buttons>
    <Buttons click={button_click1(0)}>{btn_click}</Buttons>

    
    </>
  )
}
export default Game
