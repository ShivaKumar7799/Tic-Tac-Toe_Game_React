   
   
// import "./Square.css"
// import {useState} from 'react';
// function Square(props){
//     const [value, setvalue] = useState(null)
  
//     return (<button className="square" onClick={()=>{props.onClick()}}>
//        {props.value}
//         </button> );
// }
// export default Square;




// import './Square.css';
// import {useState} from 'react';
// function Square(props){
//     const [value, setValue] = useState(null)
//     return (
//     <button className="square" onClick={()=>{props.onClick()}}>
//         {props.value}
//     </button>);
// }
// export default Square;

import './Square.css';
// import {useState} from 'react';
function Square(props){
    // const [value, setValue] = useState(null)
    return (<div className='square_container'>
    <button className="square" onClick={()=>{props.onClick()}}>  
        {props.value}
    </button>
    
 
   </div>
    
    );
  
}

export default Square;