import React from 'react'
import Page1  from '../Page1';
import Footer from '../footer'
import TestimonialSlider from '../Testimonial'
import Jobs from "../Jobs"
const Home = () => {
  return (
    <>
    
    <div>
        <Page1/>
        <Jobs/>
        <TestimonialSlider/>
       <Footer/>
    </div>
    </>
  )
}

export default Home