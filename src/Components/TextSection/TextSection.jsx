import React from 'react'
import "./TextSection.css"
const TextSection = ({data}) => {
    
  return (
    <div className='centerText-wrapper'>
      <div>
      <h1>{data.tittle}</h1>
      <p>{data.discription}</p>
      </div>
    </div>
  )
}

export default TextSection
