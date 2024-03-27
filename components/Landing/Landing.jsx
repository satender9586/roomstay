"use client"
import React from 'react'
import Footer from '../Footer/Footer'
import Offer from './Offer'
import FourBoxes from './FourBoxes'
import Pricing from './Pricing'
import Content from './Content'
import Cards from './Cards'
import Growth from './Growth'
import Header from './Header'

const Landing = () => {
    return (
        <>
           {/* <RoomInfo/> */}
           {/* <RoomListing/> */}
            <Header/>
            <Main />
            <Offer />
            <Pricing />
            <Content />
            <Growth />
            <Cards />
            <FourBoxes />
            <Footer />
        </>
    )
}

export default Landing
