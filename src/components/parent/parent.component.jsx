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
  return (
    <>
      <Child pets={pets}></Child>
    </>
  );
}
