import React from 'react'
import Score from "./Score"

function Learner(props) {
    const learner = props.name;
    const bio = props.bio;
    const score = props.score;
  return (
    <div>
        <h3>{learner}</h3>
        <p>{bio}</p>
        <p>{score}</p>
    </div>
  )
}

export default Learner