"use client"
import React from 'react'
import Footer from '@/components/Footer/Footer'
import Offer from './Offer'
import FourBoxes from './FourBoxes'
import Pricing from './Pricing'
import Content from './Content'
import Cards from './Cards'
import Growth from './Growth'
import Header from './Header'
import Top from './Top'
import Team from './Team'

const Landing = () => {
    return (
        <>
            <Header />
            <Top />
            {/* <Offer /> */}
            <Pricing />
            <Content />
            <Growth />
            <Cards />
            <Team />
            <FourBoxes />
            <Footer />
        </>
    )
}

export default Landing
