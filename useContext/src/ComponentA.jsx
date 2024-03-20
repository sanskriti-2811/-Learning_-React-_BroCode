import { useState ,createContext} from "react";
export const UserContext=createContext();
import ComponentB from "./ComponentB";
function ComponentA(){
  const[user,setUser]=useState("Sanskriti");
 return(<div className="box">
<h1>ComponentA</h1>
<h2>{`Hello ${user}`}</h2>
<UserContext.Provider value={user}>
<ComponentB user={user}></ComponentB>
</UserContext.Provider>

 </div>);

}
export default ComponentA;