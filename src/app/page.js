import Image from "next/image";
import FourBoxes from "../../components/Landing/FourBoxes";
import Offer from "../../components/Landing/Offer";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <FourBoxes/>
      <Offer/>
      <Footer/>
    </div>
  );
}
