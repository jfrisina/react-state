import React from 'react'

function Score(props) {
  const score = props.score
  const date = props.date
  return (
    <div className="score">
      <p>{date}: {score}</p>
    </div>
  )
}

export default Score