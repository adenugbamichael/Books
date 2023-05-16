/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react"
import BooksContext from "../context/books"
import BookShow from "./BookShow"

const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    )
  })
  return <div className='book-list'>{renderedBooks}</div>
}

export default BookList
