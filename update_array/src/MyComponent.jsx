import React, { useState } from "react";
function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  function handelAdd() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }
  function handelRemove(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handelRemove(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handelAdd}>Add Food</button>
    </div>
  );
}
export default MyComponent;
