import { Link } from "react-router-dom";
import React from "react";
import '../../../Styles/NameCard.css';

function HotProductCard(props) {
  return(
    <Link className="NameCard" to={`/store/${props.id}`} id={props.id}>
      <img src={props.img} alt={props.imgAlt} />
    </Link>
  )  
}

export default HotProductCard;