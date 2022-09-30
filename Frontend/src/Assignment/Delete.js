import React, { useState } from 'react'


function Delete() {
  const deleteMovie=async(e)=>
  {
    try{
      e.preventDefault();   
      const res = await fetch("/delete",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
         Mname
          })
     
        });
        const Data = await res.json();
        console.log(Data);
      if(res.status===200)
      {
          window.alert("Movie Deleted Successfully")
      }
      else
      {

          window.alert("Movie not found");
      }
  }
  catch(err)
  {
      console.log(err)
  }
  }
  const [Mname, setMname] = useState("")
  const handleInputs=(e)=>
  {
    setMname(e.target.value);
  }
  return (
    <div>Movie Name : <input type="text" name="Mname" value={Mname} onChange={handleInputs}></input><br></br>
    <button onClick={deleteMovie}>Delete Movie</button>
    </div>
  )
}

export default Delete