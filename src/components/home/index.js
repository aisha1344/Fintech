import React from 'react'
import Features from './Features'
import Clients from '../Clients'
import Footer from './Footer'
import Rating from './Rating'
import { Banner } from './Banner'
import WhoWeAre from './WhoWeAre'
import FAQ from './FAQ'

const Index = () => {
  return (
    <div className=''>
      <Banner/>
      <WhoWeAre/>
      <Rating/>

      <Features/>
      {/* <Services/> */}
      <FAQ/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default Index
