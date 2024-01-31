import Image from "next/image";
import FourBoxes from "../../components/Landing/FourBoxes";
import Offer from "../../components/Landing/Offer";
import Footer from "../../components/Footer/Footer";
import Imagebox from "../../components/About/Imagesbox";
import ImageBox2 from "../../components/About/ImageBox2";
import NotificationMenu from "../../components/Notification/Notification";


export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-10">
      <NotificationMenu/>
      </div>
      <Imagebox/>
      <ImageBox2/>
      <FourBoxes/>
      <Offer/>
      <Footer/>
    </div>
  );
}
