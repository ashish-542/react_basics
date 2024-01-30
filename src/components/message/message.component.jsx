import { useState } from "react";

export default function Message(props) {
  let [inputName, setInputName] = useState("");
  let [inputAge, setInputAge] = useState("");
  const handleOnChangeFucntion=(e) => {
    setInputName(e.target.value);
  }
  const handleOnNumberChangeFucntion=(e) => {
    setInputAge(e.target.value);
  }
  const handleOnClickFunction=() => {
    props.getUserFunction(inputName,inputAge);
    setInputName("");
    setInputAge("");
  }
  
  return (
    <>
      <input type="text" onChange={handleOnChangeFucntion} value={inputName} placeholder="Enter name"/>
      <input type="number" onChange={handleOnNumberChangeFucntion} value={inputAge} placeholder="Enter age"/>
      <button type="button" onClick={handleOnClickFunction}>Add</button>
    </>
  );
}
