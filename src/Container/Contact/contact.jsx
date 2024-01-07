import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import "./contact.css"

const contact = () => {
  return (
    <div id='contact' className='container__contact'>
      <div className="form-container">
        <h1>Contact Us</h1>
          <p>Have questions or feedback? Fill out the form below to get in touch with us.</p>
          <form action="#" method="post" id="contact-form">
              <div class="form-group">
                  <label for="name">Your Name</label>
                  <input type="text" id="name" name="name" required/>
              </div>
              <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required/>
              </div>
              <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit">Submit</button>
          </form>
      </div>
      

      <div className="address-container">
        <h1>Our Address</h1>
       
        <div className="map-container">
          {/* Embed map here. For example, using an iframe from Google Maps */}
          <iframe
            title="Map of Albany, NY"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188618.67667246038!2d-73.97968091361568!3d42.65258002396116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0a27de26caad%3A0x5317e58e5f9d0e0e!2sAlbany%2C%20NY!5e0!3m2!1sen!2sus!4v1661163228814!5m2!1sen!2sus"
            width="600"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className='location_Contact_info'>
              <div className="contact-info-item">
                <FaMapMarkerAlt />
                <h4>Niskayuna, 12309, New York</h4>
              </div>
              <div className="contact-info-item">
                <FaPhone />
                <h4>1 956 6555</h4>
              </div>
              <div className="contact-info-item">
                <FaEnvelope />
                <h4>yourdesign@gmail.com</h4>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default contact
