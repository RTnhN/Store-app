import React from "react";
import { Link } from "react-router-dom"
import "../../../Styles/CartCard.css"

function CartCard(props) {

return (
  <div id={props.item.id} className="cartItem">
    <Link className="cartCardImg" to={`/store/${props.item.id}`}>
    <img  src={props.item.img[0]} alt={props.item.name} />
    </Link>
    <h2>
      <Link className="cartCardTitle" to={`/store/${props.item.id}`}>{props.item.name}</Link>
    </h2>
    <div className="cartCardQtyPriceContainer" data-qty={props.item.qty}> 
      <p className="cartCardPrice">{`Price: ${props.item.price}`}</p>
      <p className="cartCardQty" >{`Qty: ${props.item.qty}`}</p>
      <div className="qtyContainer" data-product-id={props.item.id}>
        <button className="material-symbols-outlined cartCardQtyButton" onClick={props.incQuantity} onMouseLeave={(event) => event.target.blur() }>add</button>
        <input onChange={props.updateItem} value={props.item.qty} onMouseLeave={(event) => event.target.blur() } type="text" />
        <button className="material-symbols-outlined cartCardQtyButton" onClick={props.decQuantity} onMouseLeave={(event) => event.target.blur() }>remove</button>
      </div>
      <button className="cartCardRemoveButton" onClick={props.removeFromCart}>Remove</button>
    </div>
  </div>

)
}

export default CartCard;