import { useState } from "react"

function FormHook(initialState) {
  const [fields, setFields] = useState(initialState)

  return [
    fields,
    function (e) {
      setFields({
        ...fields,
        [e.target.name]: e.target.value
      })
    }
  ]
}

export default FormHook
