export default function Child(prop) {
  console.log("🚀 ~ Child ~ prop:", prop);
  return (
    <>
    {prop.fun(prop.param1,prop.param2)}
    </>
  );
}
Child.defaultProps={
  param1:50,
  param2:50
}
