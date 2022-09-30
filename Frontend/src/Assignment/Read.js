import React, { useEffect,useState } from 'react'

function Read() {
  const[movies,setMovies]=useState([]);
  const getData =async()=>
  {
    

    const res = await fetch("/read", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include"

    });
    const data = await res.json();
    console.log(data);
    setMovies(data);
    console.log(movies[0].Mname);
    

  }
  useEffect(() => {
    getData();
  },[]);
  return (
    <><div>Name:{}</div>
    <div>img: <img src=''></img> </div>
    Summary: 
    </>
  )
}

export default Read