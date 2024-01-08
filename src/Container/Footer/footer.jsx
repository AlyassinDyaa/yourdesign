import React from 'react'
import "./footer.css"


const footer = () => {
  return (
    <div id='footer' className='container__footer'>
          
        <footer>
          <div class="footer">
              <div class="row">
                  <a href="/"><i></i>Home</a>
                  <a href="#Gallery"><i></i>Gallery</a>
                  <a href="#Store"><i></i>Store</a>
                  <a href="#Service"><i></i>Services</a>
              </div>

              <div class="row">
              Copyright ©2024 by Your Design, All rights reserved
              </div>
          </div>
        </footer>
              
    </div>
  )
}

export default footer
