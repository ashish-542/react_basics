import Message from "./components/message/message.component";
import Child from "./components/child/child.component";
import { useState } from "react";
function App() {
  const [users,setUsers]=useState([]);
  function  getUserFunction(inputName,inputAge){
    console.log("🚀 ~  getUserFunction ~ val:", inputName,inputAge);
    let newUsers=[...users,{
      name:inputName,
      age:inputAge
    }]
    setUsers(newUsers)
  }
  return(
    <>
    <Child users={users}/>
    <Message  getUserFunction={getUserFunction}/>
    </>
  )
}

export default App;
