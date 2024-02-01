import React from 'react'
import { HeaderProps } from '../utils/types'


export const Header = ({title,image}:HeaderProps) => {
  return (
    <div className={`w-full h-72 bg-slate-100 relative ${image} `}> 
    <img className='w-full h-72 object-fill' src={image} alt={title} />
    <p className='absolute bottom-0 h-6 w-full text-center '>{title}</p>
    </div>
  )
}
