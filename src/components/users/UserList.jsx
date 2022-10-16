import {useEffect, useState} from 'react'
import React from 'react'
import {v4 as uuidv4} from "uuid"

function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        feedbackCall()
    },[])

    const feedbackCall = async () => {
        const res= await fetch(`https://api.github.com/users`)
        const data = await res.json()

        setUsers(data)
        setLoading(false)
    }

    if(!loading) {
        
        
       return <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
            <h3 key={uuidv4()}>{user.login}</h3>
        )    
        )}
        </div>
    } else {
        <h3>Loading...</h3>
    }



}

export default UserList