export default function Child(prop) {
  console.log("🚀 ~ Child ~ prop:", prop);
  let pets = prop.pets;
  return (
    <>
      {pets.map((pet) => {
        const {id,type,breed,name}= pet;
        return (
          <div key={id}>
            <p>Type : {type}</p>
            <p>Breed : {breed}</p>
            <p>Name : {name}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
