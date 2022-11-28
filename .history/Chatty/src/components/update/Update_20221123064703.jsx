import "./update.scss"

const Update = ({setOpenUpdate}) => {
  return (
    <div className="update">
      <button onClick={() => setOpenUpdate()}>X</button>

    </div>
  )
}

export default Update