import { useState, useEffect } from 'react'

const useFetch = (url, method, headers, body) => {
    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()

        fetch(url, { 
                signal: abortCont.signal,
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                if( res.error ){
                    throw res
                }
                return res
            })
            .then((res) => {
                setData(res)
                setLoading(false)
                setError(null)
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted')
                }else{
                    setData(null)
                    setLoading(false)
                    setError(err)
                }
            })


        return () => abortCont.abort()
    }, [url])

    return {data, loading, error}
}
 
export default useFetch;