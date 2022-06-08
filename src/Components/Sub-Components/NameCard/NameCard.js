import { Link } from "react-router-dom";
import React from "react";
import '../../../Styles/NameCard.css';

function NameCard(props) {
  return(
    <Link className="NameCard" to={`/store/${props.id}`} id={props.id}>
      <img src={props.img} alt={props.imgAlt} />
      <p>{props.name}</p>
    </Link>
  )  
}

export default NameCard;