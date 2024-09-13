import "./iconButton.css"
import {iconButtonText} from "../../utils/constant/iconButtonText.js"
// import {boyImage,googleplay} from "../../utils/constant/images.js"

const IconButton = ({data}) => {
    const {tittle,discription,image} = data
  return (
    <div className='iconButton-wrapper'>
      <div className="icon-image">
        <img src={image} />
      </div>
      <div className="icon-text">
        <p>{discription}</p>
        <h2>{tittle}</h2>
        {/* <p>Downloaded on the</p> */}
        {/* <h2>App Store</h2> */}
      </div>
    </div>
  )
}

export default IconButton
