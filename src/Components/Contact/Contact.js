import React from "react";
import Header from "../Sub-Components/Header/Header";
import Footer from "../Sub-Components/Footer/Footer";
import "../../Styles/Contact.css";

function Contact(props){
  return (
    <div className="pageTopLevel" id="contact">
    <Header itemsInCart={props.itemsInCart}/>
    <div className='body' id="contactBody">
      <h1 className="title" id="contactTitle">Contact</h1>
      <h2 id="contactCompanyName">Buy Stuff Here</h2>
      <p id="contactAddress"> 123 Main St. <br/> No where in particular, AZ 12345</p>
      <p id="contactPhone">(123) 456-7890</p>
      <a id="contactEmail" href="mailto:info@buystuffhere.com">info@buystuffhere.com</a>
    </div>
    <Footer/>
    </div>
    )
}

export default Contact;