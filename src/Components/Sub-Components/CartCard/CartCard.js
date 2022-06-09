import React from "react";
import { Link } from "react-router-dom"
import "../../../Styles/CartCard.css"

function CartCard(props) {

return (
  <div id={props.item.id} className="cartItem">
    <Link className="cartCardImg" to={`/store/${props.item.id}`}>
    <img  src={props.item.img[0]} alt={props.item.name} />
    </Link>
    <Link className="cartCardTitle" to={`/store/${props.item.id}`}>
    <h2>{props.item.name}</h2>
    </Link>
    <div className="cartCardQtyPriceContainer" data-qty={props.item.qty}> 
      <p className="cartCardPrice">{`Price: ${props.item.price}`}</p>
      <p className="cartCardQty" >{`Qty: ${props.item.qty}`}</p>
      <button className="material-symbols-outlined cartCardQtyButton" onClick={props.incQuantity}>add</button>
      <button className="material-symbols-outlined cartCardQtyButton" onClick={props.decQuantity}>remove</button>
      <button className="cartCardRemoveButton" onClick={props.removeFromCart}>Remove</button>
    </div>
  </div>

)
}

export default CartCard;