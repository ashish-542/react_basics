import { useState } from "react";

export default function Message() {
  let [name, setName] = useState("");
  let [inputName, setInputName] = useState("");
  const handleOnChangeFucntion=(e) => {
    console.log("🚀 ~ handleOnChangeFucntion ~ e:", e.target.value);
    setInputName(e.target.value);
  }
  const handleOnClickFunction=() => {
    setName(inputName);
    setInputName("")
  }
  return (
    <>
      <h5>{name}</h5>
      <input type="text" onChange={handleOnChangeFucntion} value={inputName}/>
      <button type="button" onClick={handleOnClickFunction}>Update Name</button>
    </>
  );
}
