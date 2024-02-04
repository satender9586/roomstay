import React from 'react'
import Footer from '../Footer/Footer'
import Offer from './Offer'
import FourBoxes from './FourBoxes'
import Main from './Main'
import Pricing from './Pricing'
import Content from './Content'
import Cards from './Cards'
import Growth from './Growth'

const Landing = () => {
    return (
        <>
            <Main />
            <Pricing />
            <Cards/>
            <Offer />
            <Growth/>
            <Content />
            <FourBoxes />
            <Footer />
        </>
    )
}

export default Landing