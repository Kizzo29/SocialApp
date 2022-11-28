import "./update.scss";
import { useState } from "react";
import { makeRequest } from "../../axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const Update = ({setOpenUpdate, user}) => {
  const[cover, setCover] = useState(null)
  const[profile, setProfile] = useState(null)
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


  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user) => {
    return makeRequest.put("/users", user)
  },
    {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["user"])
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let coverUrl = user.coverPic;
    let Pr
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("")
    setFile(null)
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
       <button onClick={handleSubmit}></button>
      </form>
      <button onClick={() => setOpenUpdate(false)}>X</button>

    </div>
  )
}

export default Update