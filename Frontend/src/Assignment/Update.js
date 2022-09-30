import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Update() {
  const navigate = useNavigate();
  const postData = async (e) => {
    e.preventDefault();

    const res = await fetch("/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Mname,
        imgLink,
        Summary,
      }),
    });
    const Data = await res.json();
    if (res.status === 200 || !Data) {
      window.alert("Movie Updated Successfully");
      navigate("/Home1");

    } else {
      window.alert("Movie not found");
      navigate("/update");
    } 
  };


  const [MovieData, setMovieData] = useState({
    Mname: "",
    imgLink: "",
    Summary: "",
  });
  const { Mname, imgLink, Summary } = MovieData;

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setMovieData({ ...MovieData, [name]: value });
  };
  return (

    <div>
    Name :
    <input
      type="text"
      name="Mname"
      value={Mname}
      onChange={handleInputs}
    ></input>
    <br></br>
    Img Link :
    <input
      type="text"
      name="imgLink"
      value={imgLink}
      onChange={handleInputs}
    ></input>
    <br></br>
    Summary :
    <input
      type="text"
      name="Summary"
      rows="3"
      value={Summary}
      onChange={handleInputs}
    ></input>
    <br></br>
    <button onClick={postData}>Submit</button>
  </div>
  )
}
