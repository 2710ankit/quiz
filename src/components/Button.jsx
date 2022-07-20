import React from 'react'

const Button = ({name,clickHandler}) => {
  return (
    <div>
        <button onClick={clickHandler} className='submit-button'>{name}</button>
    </div>
  )
}

export default Button