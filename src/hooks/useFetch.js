import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


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

    useEffect(() => { fetchData() }, [url, fetchData]);

    return ({ data, loading, error })
}
 
export default useFetch;