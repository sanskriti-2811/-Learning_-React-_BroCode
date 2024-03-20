// import React, { useState } from "react";
// function MyComponent() {
//   const [name, setName] = useState("Guest");
//   const [age, setAge] = useState(0);
//   const [isEmployed, setEmployed] = useState(false);
//   const updateName = () => {
//     setName("Sanskriti");
//   };
//   const incrementAge = () => {
//     setAge(age + 1);
//   };
//   const toggleEm = () => {
//     setEmployed(!isEmployed);
//   };

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <button onClick={updateName}> Set Name</button>

//       <p>Age: {age}</p>
//       <button onClick={incrementAge}> Increment Age</button>

//       <p>isEmployed: {isEmployed ? "yes" : "No"}</p>
//       <button onClick={toggleEm}> Toggle Status</button>
//     </div>
//   );
// }
// export default MyComponent;

// ****************On Change***************
import React, { useState } from "react";
function MyComponent() {
  // input values
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  function handelName(event) {
    setName(event.target.value);
  }

  function handelQuantity(event) {
    setQuantity(event.target.value);
  }

  //  Textarea

  const [commet, setComment] = useState("");

  function handelComment(event) {
    setComment(event.target.value);
  }

  //  Select--dropdown

  const [payment, setPayment] = useState("select");

  function handlePayment(event) {
    setPayment(event.target.value);
  }

  // Radio 
  const[shipping,setShipping]=useState("");
  function handelShipping(event){
    setShipping(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handelName}></input>
      <p>Name: {name}</p>

      <input value={quantity} onChange={handelQuantity} type="number"></input>
      <p>Quantity: {quantity}</p>

      <textarea
        value={commet}
        onChange={handelComment}
        placeholder="Enter dilivery instructuion"
      ></textarea>
      <p>Comment : {commet}</p>

      <select value={payment} onChange={handlePayment}>
        <option value ="">Select an option</option>
        <option value="Visa"> Visa</option>
        <option value="Mastercard"> Mastercard</option>
      </select>
      <p>Payment :{payment}</p>


      <lable>
        <input type="radio" value="Pick up"
        checked={shipping==="Pick up"} onChange={handelShipping}></input>
        Pick up
      </lable>
      <br/>
      <input type="radio" value="Delivery"
        checked={shipping==="Delivery"} onChange={handelShipping}></input>
      <label>Delivery</label>
      <p>Shipping :{shipping}</p>
    </div>
  );
}

export default MyComponent;
