// import React ,{useState} from 'react';
// function Counter(){
//  const[count , setcount]=useState(0);
//  const increment =() =>{
//   setcount(count+1);
//  }
//  const decrement =() =>{
//   setcount(count-1);
//  }
//  const reset =() =>{
//   setcount(0);
//  }

//  return(<div className='counter-container'>
//   <p className='count-display'>{count}</p>
//   <button className='counter-button' onClick={decrement}>Decrement</button>

//   <button className='counter-button' onClick={reset}>Reset</button>
  
//   <button className='counter-button' onClick={increment}>Increment</button>

//  </div>)
// }
// export default Counter



// **************** Update functions

import React ,{useState} from 'react';
function Counter(){
 const[count , setcount]=useState(0);
 const increment =() =>{
  // Uses the current state to calculate the next state 
  // set functions do not trigger an update
  //  React Batches together state update for performance reasons.
  // next state becomes the current state after an update
  setcount(count =>count+1);
  // take the pending state to calculate next state 
  // react puts your updater function in a queue (waiting in line)
  // during the next render , it will call them in the same order

  // Update
  setcount(count =>count+1);
  // update
  setcount(count => count+1);
 }
 const decrement =() =>{
  setcount(count-1);
 }
 const reset =() =>{
  setcount(0);
 }

 return(<div className='counter-container'>
  <p className='count-display'>{count}</p>
  <button className='counter-button' onClick={decrement}>Decrement</button>

  <button className='counter-button' onClick={reset}>Reset</button>
  
  <button className='counter-button' onClick={increment}>Increment</button>

 </div>)
}
export default Counter