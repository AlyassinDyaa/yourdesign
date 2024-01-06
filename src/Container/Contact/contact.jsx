import React from 'react'
import "./contact.css"

const contact = () => {
  return (
    <div id='contact' className='container__contact'>
      <h1>Contact Us</h1>
        <p>Have questions or feedback? Fill out the form below to get in touch with us.</p>
        <form action="#" method="post" id="contact-form">
            <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default contact
