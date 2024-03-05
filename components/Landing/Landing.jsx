import React from 'react'
import Footer from '../Footer/Footer'
import Offer from './Offer'
import FourBoxes from './FourBoxes'
import Main from './Main'
import Pricing from './Pricing'
import Content from './Content'
import Cards from './Cards'
import Growth from './Growth'
import RoomInfo from './RoomInfo'
import Header from './Header'




const Landing = () => {
    return (
        <>
           {/* <RoomInfo/> */}
            <Header/>
            <Main />
            <Pricing />
            <Cards/>
            <Offer />
            <Content />
            <Growth/>
            <FourBoxes />
            <Footer />
        </>
    )
}

export default Landing