import React, { useState } from 'react'
import './style.scss'
import { DarkMode, LightMode } from '@mui/icons-material'

const ThemeSwicther = () => {
  const [isDark, setIsDark] = useState(false)
  const ThemeIcon = isDark ? <LightMode/> : <DarkMode/>
  const ThemeText = isDark ? "Light" : "Dark"
  return (
    <div className='switcher' onClick={() => {}}>
        <span>{ThemeText}</span>
        {ThemeIcon}
    </div>
  )
}

export default ThemeSwicther