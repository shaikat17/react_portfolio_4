import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { Blog } from "./Blog"
import { Contact } from "./Contact"
import { Portfolio } from "./Portfolio"
import { Services } from "./Services"
import { Testimonials } from "./Testimonials"
export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={Home} />
          <Route exact path='/about' element={About} />
          <Route exact path='/services' element={Services} />
          <Route exact path='/portfolio' element={Portfolio} />
          <Route exact path='/testimonials' element={Testimonials} />
          <Route exact path='/blog' element={Blog} />
          <Route exact path='/contact' element={Contact} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
