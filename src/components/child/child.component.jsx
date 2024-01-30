export default function Child(prop) {
  console.log("🚀 ~ Child ~ prop:", prop);
  return <>
    {prop.users.map((user,index)=>{
      let {name,age}=user;
      return(
        <>
        <h1>Name : {name}</h1>
        <h1>Age : {age}</h1>
        {index==prop.users.length-1?"":<hr />}
        </>
      )
    })}
  </>;
}