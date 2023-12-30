import React, { ReactNode } from 'react'
import './style.scss'

interface IContainerProps {
    children: ReactNode
}
const Container: React.FC<IContainerProps> = ({children}) => {
 
  return (
    <div className='container'>
        {children}
    </div>
  )
}

export default Container