import React from 'react'

const Bb = (props) => {
  console.log(props)
  return (
    <div>
        <div className="box">
        
            <h2>box {props.boxNo}</h2>
            <p>{props.name}</p>
        
        </div>
    </div>
  )
}

export default Bb
