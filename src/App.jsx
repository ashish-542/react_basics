import Message from "./components/message/message.component";
import Child from "./components/child/child.component";
import { useState } from "react";
function App() {
  const [name,setName]=useState("");
 function  getNameFunction(name){
  console.log("🚀 ~  getNameFunction ~ name:", name)
  setName(name)
 }
  return(
    <>
    <Child name={name}/>
    <Message  getNameFunction={getNameFunction}/>
    </>
  )
}

export default App;
