// function List() {
  // const fruits = ["apple", "banana", "orange", "coconut", "pineaple"];
  // fruits.sort();
  // const listItems = fruits.map(fruit => <l1>{fruit}</l1>);
  // return (<ol>{listItems}</ol>);

  
  // fruits.sort((a,b)=>a.name.localeCompare(b.name));
  // fruits.sort((a,b)=>b.name.localeCompare(a .name));
  // numeric order
  // fruits.sort((a,b)=>a.caloried-b.caloried);
  // recerse numeric
  // fruits.sort((a, b) => b.caloried - a.caloried);

  // const highCalFruit = fruits.filter((fruit) => fruit.caloried >= 100);
  // const listItems = highCalFruit.map(highCalFruit => 
  //     <li key={highCalFruit.id}>
  //       {highCalFruit.name}: &nbsp;<b>{highCalFruit.caloried}</b>
  //     </li>
  //   );
  //   return <ol>{listItems}</ol>;
  // const lowCalFruit = fruits.filter((fruit) => fruit.caloried < 100);


  // const listItems = lowCalFruit.map((lowCalFruit) => (
  //   <li key={lowCalFruit.id}>
  //     {lowCalFruit.name}: &nbsp;<b>{lowCalFruit.caloried}</b>
  //   </li>
  // ));
  // return <ol>{listItems}</ol>;
//   const listItems = fruits.map(fruit =>
//     <li key={fruit.id}>
//       {fruit.name}: &nbsp;<b>{fruit.caloried}</b>
//     </li>
//   );
//   return <ol>{listItems}</ol>;
// }
// export default List;
// -------------using props-------------------

function List(props) {
  const category  =propa.category;
  const itemslist =props.items;
  const listItems = itemslist.map(item =>
    <li key={item.id}>
      {item.name}: &nbsp;<b>{item.caloried}</b>
    </li>
  );
  return (<>
  <h3>{category}</h3>
  <ol>{listItems}</ol>;
  </>);
}
export default List;