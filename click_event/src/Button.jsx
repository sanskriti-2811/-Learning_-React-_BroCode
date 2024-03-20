import React from 'react';

function Button() {
  // const handleClick = () => console.log("OUCH!");
  // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  // return <button onClick={() => handleClick2("BSH")}>Click me</button>;

// let cnt=0;
//   const handleClick = (name) => {
//   if(cnt <3){
//     cnt++;
//     console.log(`${name} you clicking me ${cnt} times/s`);
//   }
//   else{
//     console.log(`${name} stop clicking me !`);
//   }
//   }


// Event Parameter
//  const handleClick=(e) => e.target.textContent ="OUCH!";
//   return <button onClick={(e)=> handleClick(e)}>Click me</button>;

const handleClick=(e) => e.target.textContent ="OUCH!";
  return <button onDoubleClick={(e)=> handleClick(e)}>Click me</button>;
}

export default Button;
