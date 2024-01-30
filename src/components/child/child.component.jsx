export default function Child(prop) {
  console.log("🚀 ~ Child ~ prop:", prop);
  return <>
    {prop.name.map((n)=>{
      return(
        <h1>{n}</h1>
      )
    })}
  </>;
}