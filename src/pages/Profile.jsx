
import React from 'react'
import { useState, useEffect } from 'react'

function Profile() {

    const [data, setData] = useState([])

    useEffect(() => {

        
        const fetchData = async () => {
            try {

                const response = await fetch('/profile')
                if(!response.ok) {
                    throw new Error(response.status)
                }
                const result = await response.json()
                setData(result)
            } catch(err) {
                console.error('Fetch fails:', err)
            }
        }
        
        console.log(data)
        fetchData()
    }, [])

    return (
        <h1>Profile</h1>
    )
}

export default Profile; 