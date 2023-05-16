/* eslint-disable no-unused-vars */
import "./App.css"
import { useState, useEffect } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import axios from "axios"

const App = () => {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:5175/books")

    setBooks(response.data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:5175/books/${id}`, {
      title: newTitle,
    })

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }
      }

      return book
    })
    setBooks(updatedBooks)
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:5175/books/${id}`)

    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })

    setBooks(updatedBooks)
  }

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:5175/books", {
      title: title,
    })

    const updatedBooks = [...books, response.data]
    setBooks(updatedBooks)
  }
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
