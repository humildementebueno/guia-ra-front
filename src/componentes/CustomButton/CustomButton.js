import React from 'react'
import './CustomButton.css'

const CustomButton = ({ bgColor, width, height, onClick, children}) => {
    const buttonStyle = {
        backgroundColor: bgColor,
        width: width,
        height: height,
        onClick: onClick,
        children: children
    }
    return (
    <button style={buttonStyle} onClick={onClick}>
        {children}
    </button>
  )
}

export default CustomButton