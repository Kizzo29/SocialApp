import "./update.scss"

const Update = ({setOpenUpdate}) => {
  return (
    <div className="update">
      <form></form>
      <button onClick={() => setOpenUpdate(false)}>X</button>

    </div>
  )
}

export default Update