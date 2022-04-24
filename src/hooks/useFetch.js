import { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [ isPending, setIsPending ] = useState(false)
    // const [error, setError] = useState(false)
    
    useEffect(() => {
        const fetchReq = async () => {
            setIsPending(true)
            const res = await fetch(url)
            const data = await res.json()
            setIsPending(false)
            setData(data)
        }
        fetchReq()
    },[url])

  return {data, isPending}
}

export default useFetch