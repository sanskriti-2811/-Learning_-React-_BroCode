import List from "./List";
function App() {
  const fruits = [
    { id: 1, name: "apple", caloried: 95 },
    { id: 2, name: "banana", caloried: 950 },
    { id: 3, name: "orange", caloried: 195 },
    { id: 4, name: "coconut", caloried: 70 },
  ];
  return <List items={fruits} category ="Fruits"/>;
}

export default App;
