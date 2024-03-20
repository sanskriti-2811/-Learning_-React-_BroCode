import Student from "./Student.jsx";
function App() {
  return(<>
<Student name="Sanskriti" age={18} isStudent={false}></Student>
<Student name="Hushed" age={22} isStudent={true}></Student>
<Student name="Sneha" age={21} isStudent={true}></Student>
<Student name="Sneha" ></Student>
  </>);
}

export default App
