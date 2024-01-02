import React from 'react'
import './style.scss'
import { ThemeSwicth } from '..'


const Header: React.FC = () => {
  return (
    <div className='header'>
        <div className="logo">Tech Academy</div>
        <ThemeSwicth/>
    </div>
  )
}

export default Header