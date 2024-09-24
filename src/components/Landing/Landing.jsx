"use client";
import React, { useEffect, useLayoutEffect } from "react";
import Footer from "@/components/Footer/Footer";
import FourBoxes from "./FourBoxes";
import Pricing from "./Pricing";
import Cards from "./Cards";
import Growth from "./Growth";
import Header from "./Header";
import Top from "./Top";
import Team from "./Team";
import { toast } from "sonner";
import TestimonialSection from "./Testimonals";
import BlogSection from "./Blogs";
// import Content from './Content'
// import Offer from './Offer'

const Landing = () => {
  // useLayoutEffect(() => {
  //   toast("Email: jai@mailsac.com, Password:Test@1234", {
  //     description: "Website is on progress ! ",
  //     position: "top-center",
  //     action: {
  //       label: "Close",
  //       onClick: () => console.log("Close"),
  //     },
  //   })
  // }, [])
  return (
    <>
      <Header />
      <Top />
      {/* <Offer /> */}
      <Pricing />
      <Cards />
      <FourBoxes />
      {/* <Content /> */}
      <Growth />
      <Team />
      <BlogSection/>
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default Landing;
