import React from 'react'

const Input = ({inputChangleHandler, value}) => {
  return (
    <div>
        <input type='text' onChange={inputChangleHandler} value={value}/>
    </div>
  )
}

export default Input