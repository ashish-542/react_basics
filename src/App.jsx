import Message from "./components/message/message.component";
import Child from "./components/child/child.component";
import { useState } from "react";
function App() {
  const [name,setName]=useState([]);
  console.log("🚀 ~ App ~ name:", name)
 function  getNameFunction(val){
  console.log("🚀 ~  getNameFunction ~ val:", val)
  setName([...name,val])
 }
  return(
    <>
    <Child name={name}/>
    <Message  getNameFunction={getNameFunction}/>
    </>
  )
}

export default App;
