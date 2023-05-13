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
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label style={{ color: "#EDF2F7" }}>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button myBtn'>Create!</button>
      </form>
    </div>
  )
}

export default BookCreate
