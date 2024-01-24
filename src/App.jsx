//onSubmit event
function App() {
  let handleChange=(event)=>{
   console.log(event.target.value);
  }
  let handleSubmit=(event)=>{
    alert("Form Submitted");
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter any text" onChange={(event)=>handleChange(event)}/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App;
