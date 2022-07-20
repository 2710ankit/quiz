import React from 'react'

const Button = ({name,clickHandler}) => {
  return (
    <div>
        <button onClick={clickHandler}>{name}</button>
    </div>
  )
}

export default Button