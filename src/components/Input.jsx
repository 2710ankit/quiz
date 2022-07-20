import React from 'react'

const Input = ({inputChangleHandler, value}) => {
  return (
    <div>
        <input type='text' onChange={inputChangleHandler} value={value} className='answer'/>
    </div>
  )
}

export default Input