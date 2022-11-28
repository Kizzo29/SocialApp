import "./update.scss";
import { useState } from "react";

const Update = ({setOpenUpdate}) => {
  const[cover, setCover] = useState
  const [texts, setTexts] = useState({
    name:"",
    city:"",
    website:"",
  })

  const upload = async (file) => {
    try{
     const formData = new FormData();
     formData.append("file", file)
     const res = await makeRequest.post("/upload", formData);
     return res.data
    }catch(err){
      console.log(err)
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({...prev, [e.target.name]: [e.target.value]}))
  }
  return (
    <div className="update">
      <form>
       <input type="file" />
       <input type="file" />
       <input type="text" name="name" onChange={handleChange} />
       <input type="text" name="city" onChange={handleChange}/>
       <input type="text" name="website" onChange={handleChange}/>
      </form>
      <button onClick={() => setOpenUpdate(false)}>X</button>

    </div>
  )
}

export default Update