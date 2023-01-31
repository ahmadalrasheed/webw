import React from 'react'
import { ButtonBody } from './Theme'
interface ButtonStyle{
    hoverBackgroundColor?: string;
    backgroundColor?: string;
    color?: string;
    fontWeight?:string;
    borderRadius?:string
}
interface ButtonInfo{
    text? : string;
    children?: React.ReactElement;
    disabled?: boolean,
    onClick?: any;
    buttonStyle?:ButtonStyle;
}
export const Button = ({ text , children  , disabled , onClick , buttonStyle}:ButtonInfo) => {
  return (
    <ButtonBody onClick={onClick} disabled={disabled} {...buttonStyle} > 
        {text}
        <>
        {children && children}
        </>
    </ButtonBody>
  )
}

export default Button
