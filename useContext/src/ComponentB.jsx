import ComponentC from "./ComponentC";
// not more need of props 
// function ComponentB(props){
  function ComponentB(){
 return(<div className="box">
<h1>ComponentB</h1>
{/* <ComponentC user={props.user}></ComponentC> */}
<ComponentC />
 </div>);

}
export default ComponentB;