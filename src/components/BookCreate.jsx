/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { FormControl, FormLabel, Input } from "@chakra-ui/react"

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("")

  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  return (
    <FormControl>
      <FormLabel>Title</FormLabel>
      <Input />
    </FormControl>
  )
}

export default BookCreate
