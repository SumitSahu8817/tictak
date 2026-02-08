import React, { useRef, useState } from 'react'
import './TicTacToe.css' 
import cross_icon from '../Assest/cross.png'
import circle_icon from '../Assest/circle.png'

let data = ["","","","","","","","",""];
const TicTacToe = () => {

let [count,setcount] = useState(0); 
let [lock,setlock] = useState(false);
let titleref = useRef(null);
const toggle = (e,num)=>{
if(lock){
  return 0;
}
if(count%2===0){
 e.target.innerHTML = `<img src="${cross_icon}" />`;

  data[num]="x";
  setcount(count+1);
}else{
    e.target.innerHTML = `<img src="${circle_icon}" />`;

  data[num]="o";
  setcount(count+1);
}
checkwin();
}

  // const checkwin = ()=>{
  //   if(data[0]===data[1]&&data[1]===data[2]&&data[2]!=""){
  //         won(data[2]);
  //   }
  //   else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!=""){
  //     won(data[5]);
  //   }else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!=""){
  //     won(data[8]);
  //   }else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!=""){
  //     won(data[6]);
  //   }else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!=""){
  //     won(data[7]);
  //   }else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!=""){
  //     won(data[8]);
  //   }else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!=""){
  //     won(data[8]);
  //   }else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!=""){
  //       won(data[6]);
  //   }
  // }
  const winPatterns = [
  [0,1,2], 
  [3,4,5], 
  [6,7,8], 
  [0,3,6], 
  [1,4,7], 
  [2,5,8], 
  [0,4,8], 
  [2,4,6]  
];

const checkwin = () => {
  for (let [a, b, c] of winPatterns) {
    if (data[a] && data[a] === data[b] && data[b] === data[c]) {
      won(data[a]); 
      return true;  
    }
  }
  return false; 
};


  const won = (winner)=>{
    setlock(true);
    if(winner==="x"){
     titleref.current.innerHTML = `congratulations: <img src="${cross_icon}" Wins. />`;
    }else{
      titleref.current.innerHTML = `congratulations: <img src="${circle_icon}" Wins. />`;
    }
  }
 const reset = () => {
  setlock(false);
  data = ["","","","","","","","",""];
  titleref.current.innerHTML = `Tic-Tac-Toe Game In <span>React</span>`;
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.innerHTML = '');
  setcount(0);
}
  return (
    <div className='container'>
      <h1 className="title" ref={titleref}>Tic-Tac-Toe Game In<span>React</span></h1>
      <div className="board">
            <div className="row1">
              <div className="box"  onClick={(e)=>{toggle(e,0)}}></div>
              <div className="box"  onClick={(e)=>{toggle(e,1)}}></div>
              <div className="box"  onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            
             <div className="row2">
              <div className="box"  onClick={(e)=>{toggle(e,3)}}></div>
              <div className="box"  onClick={(e)=>{toggle(e,4)}}></div>
              <div className="box"  onClick={(e)=>{toggle(e,5)}}></div>
            </div>
             <div className="row3">
              <div className="box"  onClick={(e)=>{toggle(e,6)}}></div>
              <div className="box"  onClick={(e)=>{toggle(e,7)}}></div>
              <div className="box"  onClick={(e)=>{toggle(e,8)}}></div>
            </div>
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  )
}
export default TicTacToe
