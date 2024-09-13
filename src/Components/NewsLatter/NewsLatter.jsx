import React from 'react'
import { newslatter } from '../../utils/constant/textSec'
import Button from '../Botton/Button'
import './newslater.css'


const NewsLatter = () => {
  return (
    <div className='newslater-wrapper'>
      <div>
        <h1>{newslatter.tittle}</h1>
        <p>{newslatter.discription}</p>
      </div>
      <div className="input-wrapper">
          <input type="text" placeholder="Enter Your Email Address" />
          <Button isCard={true} data="Send" />
        </div>
    </div>
  )
}

export default NewsLatter
