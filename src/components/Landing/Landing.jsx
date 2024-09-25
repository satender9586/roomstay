import Footer from "@/components/Footer/Footer";
import FourBoxes from "./FourBoxes";
import Pricing from "./Pricing";
import Cards from "./Cards";
import Growth from "./Growth";
import Header from "./Header";
import Top from "./Top";
import Team from "./Team";
import BlogSection from "./Blogs";
import Testimonial from "./Testimonals";
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
      <BlogSection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Landing;
