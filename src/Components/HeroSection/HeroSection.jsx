import "./styleHerosection.css";
import heroSecText from "../../utils/constant/heroSecText.js";
import allImages from "../../utils/constant/images.js";
import Button from "../Botton/Button.jsx";
import IconButton from "../iconButton/iconButton.jsx";
import { iconButtonText, iconButtonText1 } from "../../utils/constant/iconButtonText.js";


const HeroSection = () => {
  return (
    <div className="herosecion-wrapper">
      <div className="herosection-text">
        <h1 className="herosection-heading">{heroSecText.tittle}</h1>
        <p>{heroSecText.discription}</p>

        <div className="input-wrapper">
          <input type="text" placeholder="Enter Your Delivery Location" />
          <Button isCard={true} data="Order Now" />
        </div>
        <div className="icon-wrapper">
          <IconButton data={iconButtonText}/>
          <IconButton data={iconButtonText1}/>

        </div>
      </div>

      <div className="image-wrapper">
        <img src={allImages.boyImage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
