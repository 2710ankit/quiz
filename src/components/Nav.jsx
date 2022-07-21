import React, { useEffect } from 'react'
import Button from './Button'

const Nav = ({totalScore, resetQuizz}) => {


  useEffect(() => {
  }, [totalScore])
  
  const resetQuiz = ()=>{
    resetQuizz()
  }

  return (
    <div className='total-score'>
        <h1>Total Score: {totalScore}</h1>
        <Button name="Reset Quiz" clickHandler={resetQuiz}/>
    </div>
  )
}

export default Nav