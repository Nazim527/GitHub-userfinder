import React from 'react'
import './style.scss'
import { ThemeSwicth } from '..'


const Header: React.FC = () => {
  return (
    <div className='header'>
        <div className="logo">GitHub userfinder</div>
        <ThemeSwicth/>
    </div>
  )
}

export default Header