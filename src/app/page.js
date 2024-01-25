import Image from "next/image";
import FourBoxes from "../../components/Landing/FourBoxes";
import Offer from "../../components/Landing/Offer";
import Footer from "../../components/Footer/Footer";
import Imagebox from "../../components/About/Imagesbox";


export default function Home() {
  return (
    <div>
      <Imagebox/>
      <FourBoxes/>
      <Offer/>
      <Footer/>
    </div>
  );
}
