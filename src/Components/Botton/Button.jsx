import './styleButton.css'
const Button = ({data,isCard}) => {
  return (
    <div className='Btn'>

       {isCard ? <button>{data}</button> : null}
      
    </div>
  )
}

export default Button
