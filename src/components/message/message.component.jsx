import { useState } from "react";

export default function Message(props) {
  let [inputName, setInputName] = useState("");
  const handleOnChangeFucntion=(e) => {
    setInputName(e.target.value);
  }
  const handleOnClickFunction=() => {
    props.getNameFunction(inputName);
    setInputName("")
  }
  return (
    <>
      <input type="text" onChange={handleOnChangeFucntion} value={inputName}/>
      <button type="button" onClick={handleOnClickFunction}>Update Name</button>
    </>
  );
}
