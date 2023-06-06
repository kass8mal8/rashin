import { useEffect, useState } from "react"

const usePost = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const post = async(body) => {
        setLoading(true)
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const response = await res.json()
            setData(response)

        } 
        catch (error) {
            setError(error.message)
        } 
        finally {
            setLoading(false)
        }
    }

    useEffect(()=> { post() }, [url])
    return({ post, data, loading, error })

}

export default usePost