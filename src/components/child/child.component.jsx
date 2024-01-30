export default function Child(prop) {
  console.log("🚀 ~ Child ~ prop:", prop);
  return <>
  <h2>Hello from child</h2>
  {prop.children}
  </>;
}