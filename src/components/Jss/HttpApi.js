import React from 'react'

const useFetch = (url, options) => {
  const [response,
    setResponse] = React.useState(null);
  const [error,
    setError] = React.useState(null);
  const [isLoading,
    setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setResponse(data);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return {response, error, isLoading};
};

const useFetchData = (url) => {
  const [response,
    setResponse] = React.useState(null);
  const [error,
    setError] = React.useState(null);
  const [isLoading,
    setIsLoading] = React.useState(false);
  
    
  React.useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();

        setResponse(data);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return {response, error, isLoading};
};

const useAddData = (url, bodyData) => {
  const [response,
    setResponse] = React.useState(null);
  const [error,
    setError] = React.useState(null);
  const [isLoading,
    setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const addData = async() => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(bodyData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        setResponse(data);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    addData();
  }, []);

  return {response, error, isLoading};
};

const useUpdateData = (url, bodyData) => {
  const [response,
    setResponse] = React.useState(null);
  const [error,
    setError] = React.useState(null);
  const [isLoading,
    setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const updateData = async() => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(bodyData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        setResponse(data);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    updateData();
  }, []);

  return {response, error, isLoading};
};

const useDelData = (url) => {
  const [response,
    setResponse] = React.useState(null);
  const [error,
    setError] = React.useState(null);
  const [isLoading,
    setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const deleteData = async() => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        setResponse(data);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    deleteData();
  }, []);

  return {response, error, isLoading};
};



export default useFetchData
export {useAddData, useDelData, useUpdateData, useFetch}