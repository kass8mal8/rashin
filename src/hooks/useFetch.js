import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            try {
                const res = await fetch(url)
                const data = await res.json()
                setData(data)
    
            } catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url]);

    return ({ data, loading, error })
}
 
export default useFetch;