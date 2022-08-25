import React, {useState, useEffect} from 'react'

export const useFetch = (url:string) => {

    const [data, setData] = useState(null)
    const [isPending, SetIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then ((data) =>{
                    setData(data)
                    SetIsPending(false)
                    setError(null)
                })
                .catch(err=>{
                    SetIsPending(false)
                    setError(err.message)
                })
        }, 1000)
      }, [url])

      return { data, isPending, error}
}

export default useFetch


