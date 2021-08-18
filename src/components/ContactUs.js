import React from 'react'
import NavigationBar from './NavigationBar';
import "../App.css";

function ContactUs() {
  return (
    <div>
      <NavigationBar />
      <br />
      
  <div class="container">
    <div class="text-center">
      <h2 class="section-heading text-uppercase">Contact us</h2>
      <h6 class="section-subheading text-muted">We Re available 24/7. Contact us any time!</h6>
  </div>
  </div>
  <form className="form" >
    <h4>Contact Form </h4>

    <lable>Name</lable>
    <input placeholder="name"/>

    <lable>Email</lable>
    <input placeholder="email"/>

    <lable>Messege</lable>
    <textarea placeholder="messege"></textarea>

    <button type="submit">SUBMIT</button>
  </form>

   
    </div>
  )
}

export default ContactUs
