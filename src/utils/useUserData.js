import { useState, useEffect } from 'react'
const useUserData = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const data = await fetch('https://randomuser.me/api/')
        const json = await data.json()
        setUser(json.results[0])
    }

    return user
}

export default useUserData