export default function Child(prop) {
  console.log("🚀 ~ Child ~ prop:", prop);
  return <>
    <h1>{prop.name}</h1>
  </>;
}