import React from 'react'

const Questions = ({id, num1, operator, num2}) => {
  // console.log(num1);
  // console.log(operator);
  // console.log(num2);
  return (
    <div>
        <h1>Question {id}</h1>
        <div>
            {num1} {operator} {num2}
        </div>
    </div>
  )
}

export default Questions