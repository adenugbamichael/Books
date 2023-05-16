/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react"
import BooksContext from "../context/books"
import BookShow from "./BookShow"

const BookList = () => {
  const { books } = useContext(BooksContext)

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />
  })
  return <div className='book-list'>{renderedBooks}</div>
}

export default BookList
