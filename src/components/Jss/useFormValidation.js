import React from "react";

function useFormValidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setSubmitting] = React.useState(false)

  React.useEffect(() => {
    if(isSubmitting){
      const noErrors = Object.keys(errors).length === 0
      
      if(noErrors){
        console.log("Authentcated!", values.email, values.password)
        setSubmitting(false)
      } else{
        setSubmitting(false)
      }
    }

  }, [errors])

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }


  function handleBlurr() {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true)
    const validationErrors = validate(values)
    setErrors(validationErrors)

    let dataBody = {
      fName: values.firstName,
      lName: values.lastName,
      email: values.email,
      password: values.password,
      type: values.type
    }
    try {
      const res = fetch("http://stimuli.sytes.net:50000/signup", {
        method: 'POST',
        body: JSON.stringify(dataBody),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = res.json();
      
    } catch (error) {
      return error;
    }
    
  }

  return {handleSubmit, handleChange, handleBlurr, values, errors, isSubmitting}
}

export default useFormValidation;