import React, { useEffect } from 'react'

const Nav = ({totalScore}) => {


  useEffect(() => {
  }, [totalScore])
  


  return (
    <div className='total-score'>
        <h1>Total Score: {totalScore}</h1>
    </div>
  )
}

export default Nav