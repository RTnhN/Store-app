import React from "react";
import "../../../Styles/NamePriceCard.css";
import { Link } from "react-router-dom";

function NamePriceCard(props) {
  return(
    <Link className="NamePriceCard" to={`/store/${props.id}`} id={props.id}>
      <img src={props.img} alt={props.imgAlt} />
      <p>{props.name}</p>
      <p>{props.price}</p>
    </Link>
  )  
}


export default NamePriceCard;