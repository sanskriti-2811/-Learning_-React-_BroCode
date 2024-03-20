import React, { useState } from "react";
function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carsYear, setCarsYear] = useState(new Date().getFullYear());
  const [carsMake, setCarsMake] = useState("");
  const [carsModel, setCarsModel] = useState("");

  function handelAdd() {
    const newCar={year:carsYear,make:carsMake, model:carsModel};
    setCars(c=>[...c,newCar]);
      setCarsYear(new Date().getFullYear());

  setCarsMake("");
  setCarsModel("");
      
  }
  function handelRemove(index) {
   setCars(c=>c.filter((_,i)=>i!==index));

  }
  function handelYear(event) {
    setCarsYear(event.target.value);
  }
  function handelMake(event) {
    setCarsMake(event.target.value);
  }
  function handelModel(event) {
    setCarsModel(event.target.value);
  }
  return (
    <div>
      <h2>List of Car Object</h2>
      <ul>
        {cars.map((car,index)=>
        <li key={index} onClick={()=>handelRemove(index)}>{car.year} {car.make} {car.model}</li>)}
      </ul>
      <input type="number" value={carsYear} onChange={handelYear}></input>
      <input
        type="text"
        value={carsMake}
        onChange={handelMake}
        placeholder="Enter car make"
      ></input>
      <input
        type="text"
        value={carsModel}
        onChange={handelModel}
        placeholder="Enter car Model"
      ></input>
      <button onClick={handelAdd}>Add Car</button>
    </div>
  );
}
export default MyComponent;
