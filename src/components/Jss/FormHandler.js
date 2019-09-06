import React from "react"

function FormHandler(callback){
  const [values, setValues] = React.useState({})
  
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    callback(values);
  }

  return { handleChange, handleSubmit, values }
}

export default FormHandler