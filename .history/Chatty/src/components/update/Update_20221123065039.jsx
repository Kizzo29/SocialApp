import "./update.scss"

const Update = ({setOpenUpdate}) => {
  return (
    <div className="update">
      <form>
       <input type="file" />
       <input type="text" />
       <input type="text" />
       <input type="text" />
       <input type="text" />


      </form>
      <button onClick={() => setOpenUpdate(false)}>X</button>

    </div>
  )
}

export default Update