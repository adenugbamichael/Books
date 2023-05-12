/* eslint-disable react/prop-types */
import { useState } from "react"

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("")

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate(title)
    setTitle("")
  }

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "row", gap: "0px" }}
        onSubmit={handleSubmit}
      >
        <label>Title</label>
        <input
          style={{ maxWidth: "50vw" }}
          value={title}
          onChange={handleChange}
        />
        <button style={{ backgroundColor: "teal" }}>Create!</button>
      </form>
    </div>
  )
}

export default BookCreate
