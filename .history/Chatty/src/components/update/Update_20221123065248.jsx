import "./update.scss"

const Update = ({setOpenUpdate}) => {
  const [texts, setTexts] = ud
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