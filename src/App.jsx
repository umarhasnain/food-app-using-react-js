import Card from "./Components/constant/Card/Card";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import NewsLatter from "./Components/NewsLatter/NewsLatter";
import Testonomial from "./Components/Testonomial/Testonomial";
import TextSection from "./Components/TextSection/TextSection";
import { cardData, orderData } from "./utils/constant/card";
import { centerText, centerText1 } from "./utils/constant/textSec";

function Add() {
  console.log(cardData);

  return (
    <div>
      <Header />
      <HeroSection />
      <TextSection data={centerText} />

      <div className="cardDiv-wrapper">
        {cardData.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>

      <TextSection data={centerText1} />

      <div className="cardDiv-wrapper">
      {orderData.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>

      <Testonomial/>

      <NewsLatter/>

      <Footer/>
    </div>
  );
}

export default Add;
