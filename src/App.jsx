/* eslint-disable no-unused-vars */
import "./App.css"
import { useState } from "react"
import BookCreate from "./components/BookCreate"

const App = () => {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    console.log("Need to add book with:", title)
  }

  return (
    <div className='section pad'>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
