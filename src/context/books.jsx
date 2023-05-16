/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

const BooksContext = createContext()

const Provider = ({ children }) => {
  const [count, setCount] = useState(0)

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1)
    },
  }

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  )
}
export { Provider }
export default BooksContext
