import React,{useState} from 'react';
function MyComponent(){
 const[car,setCar]=useState({year:2024,make:"Ford",model:"Mustang"});

 function handleYear(event){
setCar(c=>({...car ,year:event.target.value}));
 }

 function handleMake(event){
  setCar( c =>({...car ,make:event.target.value}));
 }

 function handleModel(event){
  setCar(c=>({...car ,model:event.target.value}));
 }

 return (<div>
  <p>Your favorite car is:{car.year} {car.make}{ car.model}</p>
  <input type='number' value={car.year} onChange={handleYear}></input> <br/>
  <input type='text' value={car.make} onChange={handleMake} ></input> <br/>
  <input type='text' value={car.model} onChange={handleModel}></input> <br/>
 </div>);
}
export default MyComponent