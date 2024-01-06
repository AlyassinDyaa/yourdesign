import React from 'react'
import "./about.css"

const about = () => {
  return (
    <div className='bg_back' style={{backgroundColor: "#f5f5f5"}}>
        <div className='container__about' id='about'>

          <div className='container__about-header'>
              <h1 className='container__about-header_title'>ABOUT US</h1>
              <h2 className='container__about-header_subTitle'>Your design?</h2>
          
              <p className='container__about-paragraph'>
          As a  family-owned company passionate about creating unique and personalized canvases from scratch. Our focus is on designs that are not only beautiful but also meaningful, reflecting the rich Islamic heritage and culture. Our canvases are perfect for gifts, personal use, or events. You can choose from our range of completed designs or request a custom design that tells a story for yourself or your friend. We use only the highest quality materials, and as a family-owned business, we strive to provide exceptional customer service and ensure that each customer is completely satisfied with their purchase.
          </p>
          </div>

          <div className='container__about-header'>
              <h1 className='container__about-header_title'>OUR STORY</h1>
              <h2 className='container__about-header_subTitle'>Our Mission?</h2>
          
              <p className='container__about-paragraph'>
              At our Muslim family-owned company, we believe that a canvas is not just a gift but a way to celebrate life's moments and express love, joy, and gratitude. We create unique and personalized designs that capture the essence of your special occasion. Our canvases are made from scratch and can be tailored to your specific needs. You can choose from our completed designs or request a custom design that has a story behind it. We use only the highest quality materials, and customer satisfaction is our top priority.
          </p>
          </div>
          
        
        </div>
    </div>
  )
}

export default about
