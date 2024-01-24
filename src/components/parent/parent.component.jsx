import Child from "../child/child.component";
export default function Parent() {
  let pets = [
    {
      id: 1,
      type: "dog",
      breed: "beagle",
      name: "Gus",
    },
    {
      id: 2,
      type: "cat",
      breed: "calico",
      name: "Gerald",
    },
  ];
  function parentFunction(message){
    alert(message);
  }
  return (
    <>
      <Child pets={pets} parentFunction={parentFunction}></Child>
    </>
  );
}
