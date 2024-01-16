import React from 'react'
import './style.scss'

type IButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButtonProps> = ({children, onClick}) => {
  return (
    <button className='button' onClick={onClick}>
        {children}
    </button>
  )
}

export default Button