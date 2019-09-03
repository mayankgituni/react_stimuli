import React from "react"
import axios from 'axios'
import useEndpoint from './useEndpoint'

function useProfileFetcher(){
  const [data, setData] = React.useState({})
  const [values, setValues] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    // Fetch the data
    setIsLoading(true)
    console.log(values)

    const URL = "http://localhost:50000/login?email="+values.email+"&password="+values.password;
    
    // const todo = useEndpoint({
    //   method: "GET",
    //   url: URL
    // });

    axios("http://stimuli.sytes.net:50000/login?email=asdasd&password=asdsa")
    .then(res =>{
      setData({data: res.data})
      if(res.ok){
        console.log("Eveything")
      }
    })
    
    // console.log(data)
    // fetch(URL)
    // .then(res => {
    //   if (res.ok) {
    //     return res.json();
    //   } else {
    //       throw Error("Error fetching user profile!")
    //   }
    // })
    // .then(data => {
    //     setData(data);
    //     console.log(data)
    //     setIsLoading(false);
    // })
    // .catch(error => {
    //   console.log(error)
    //   console.log("Error state is coming")
    //     setError(error)
    // })
    // console.log()
    setIsLoading(false)
  }

  return {handleChange, handleSubmit, data, values, error, isLoading}
}

export default useProfileFetcher