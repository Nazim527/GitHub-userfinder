import React from 'react'
import './style.scss'
import { UserTitle } from './components'

const UserCard: React.FC = () => {
  return (
    <div className='usercard'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgubqzveGfonqnt4XHQEuglmkeHwfzfSInQ&usqp=CAU" alt="" />
        <UserTitle/>
    </div>
  )
}

export default UserCard