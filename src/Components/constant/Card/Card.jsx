import React from "react";
import "./card.css";

const Card = ({ data }) => {
  // console.log(data);
  // const [image,tittle] = data

  return (
    <div className="cardDiv">
        <h2 className="card-id">{data.id}</h2>
      <div className="card-wrapper">
        <div className="cardImage">
          <img src={data.image} />
        </div>
        <div>
          <h1>{data.tittle}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
