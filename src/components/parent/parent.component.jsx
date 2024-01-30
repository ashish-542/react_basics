import Child from "../child/child.component";
export default function Parent() {
   function myFunction(param1,param2) {
    console.log("🚀 ~ myFunction ~ param2:", param2)
    console.log("🚀 ~ myFunction ~ param1:", param1)
    let res=param1+param2;
    alert(`Result is ${res}`);
  }
  return (
    <>
      <Child fun={myFunction}></Child>
    </>
  );
}
