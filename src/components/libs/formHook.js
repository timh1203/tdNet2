import { useState } from "react"

function formHook(initialState) {
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

export default formHook
