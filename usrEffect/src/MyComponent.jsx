// import React, { useState, useEffect } from "react";
// function MyComponent() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("green");
//   useEffect(() => {
//     document.title = `Count:${count} ${color}`;
//     return()=>{
//       // some clearnup code
//     }
//   }, [count, color]);
//   function addCount() {
//     setCount((c) => c + 1);
//   }
//   function subCount() {
//     setCount((c) => c - 1);
//   }
//   function changeColor() {
//     setColor((c) => (c === "green" ? "red" : "green"));
//   }
//   return (
//     <>
//       <p style={{ color: color }}>Count:{count}</p>
//       <button onClick={addCount}> Add</button>
//       <button onClick={subCount}> Sub</button>
//       <br />
//       <button onClick={changeColor}> Change</button>
//     </>
//   );
// }
// export default MyComponent;







import React, { useState, useEffect } from "react";
function MyComponent() {
  const[width,setwidth]=useState(window.innerWidth);
  const[height,setheight]=useState(window.innerHeight);
  useEffect(()=>{
    window.addEventListener("resize",handleResize);
    console.log("event");
    return()=>{
      window.removeEventListener("resize",handleResize);
      console.log("event remove");
    }
  },[]);
 
  function handleResize(){
    setheight(window.innerHeight);
    setwidth(window.innerWidth);
  }
  return (
    <>
    <p>window Width :{width}px</p>
    <p>window Height :{height}px</p>
      
    </>
  );
}
export default MyComponent;
