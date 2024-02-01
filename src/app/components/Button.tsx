import React from 'react'
import { ButtonProps } from '../utils/types'

export const CustomButton = ({title,additionalCss}:ButtonProps) => {
  return (
    <button className= {`px-4 py-4  border rounded-md  ${additionalCss}`}>{title}</button>
  )
}
