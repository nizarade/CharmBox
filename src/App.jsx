import React from 'react'
import Header from './component/Header'
import About from './component/About'
import Projects from './component/Projects'
import Testimonials from './component/Testimonials'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  return (
    <>
    <ToastContainer/>
    <Header/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
    )
}

export default App