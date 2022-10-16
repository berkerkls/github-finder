import React from 'react'
import UserList from "../components/users/UserList"

function Home() {
  return (
    <div>
      <h1 className='text-6xl text-white'>Welcome</h1>
      <UserList />
    </div>
  )
}

export default Home