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
import RoomListing from './RoomListing'
import Header from './Header'




const Landing = () => {
    return (
        <>
            <RoomListing/>
            <RoomInfo/>
            <Main />
           {/* <RoomInfo/> */}
            <Header/>
            {/* <Main /> */}
            <Offer />
            <Pricing />
            <Content />
            <Growth/>
            <Cards/>
            <FourBoxes />
            <Footer />
        </>
    )
}

export default Landing