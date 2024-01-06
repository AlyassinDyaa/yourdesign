import React  from 'react'
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom"


import NAV from "../src/Components/Navbar/Nav"
import SOCIAL from "../src/Components/social/social"

import HEAD from "../src/Container/HeroPage/Main"
import ABOUT from "./Container/HeroPage/About/about"

import CANVAS from "../src/Components/Canvas/Canvas"
import GALLERY from "../src/Container/Gallery/Gallery"
import STORE from "../src/Container/Store/Store"

import CONTACT from "./Container/Contact/contact"
import FOOTER from "./Container/Footer/footer"

const App = () => {
  return (
    <Router>
      
      <NAV/>
      <SOCIAL/>

      <Routes>
        <Route path="/" element={<HEAD />} />
        <Route path="/Gallery" element={<GALLERY />} />
        <Route path="/Store" element={<STORE/>} />
      </Routes>

      <CONTACT/>
      <FOOTER/>
  </Router>
   
  )
}

export default App
