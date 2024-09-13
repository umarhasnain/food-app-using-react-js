import React from 'react'
import { testonomial } from '../../utils/constant/textSec'
import "./testonomial.css"

const Testonomial = () => {
    // const [tittle,dis] = testonomial
    console.log(testonomial);
    
  return (
    <div className='testonomial-wrapper'>
      <div className='testo-text'>
      <h1>{testonomial.tittle}</h1>
       <p>{testonomial.discription}</p>
       <img src={testonomial.image} />
       <h2>{testonomial.dec}</h2>
       <h3>{testonomial.userName}</h3>
       <p>{testonomial.heading}</p>
      </div>
      
    </div>
  )
}

export default Testonomial
