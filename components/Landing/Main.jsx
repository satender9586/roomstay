import React from "react";
import Image from "next/image";
import mainImg from "../../assests/Images/hotel.webp"
import oneImg from "../../assests/Images/girl.webp"
import twoImg from "../../assests/Images/doctor.webp"
import thirdImg from "../../assests/Images/couple.webp";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Main = () => {
  return (
    <div className="container mb-16">
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-1 relative">

            <div className="absolute z-50 w-[600px] top-20" >
              <div className="font-heading font-semibold text-2xl leading-10 sm:text-4xl md:text-5xl lg:text-6xl | mb-12 lg:mb-3">
                You've got 99 problems, but brokerage ain't one
              </div>

                <h1 className="font-heading  text-gray-900  text-3xl sm:text-4xl md:text-1xl lg:text-lg | mt-8 lg:mb-1">
                  <span className="font-bold mr-1">
                    Live close
                  </span>
                  to your college or workspace
                </h1>
            </div>
          </div>

          <div
            className="col-span-1 bg-gray-300"
            style={{
              height: "500px",
              borderRadius: "3%",
            }}
          >
            <Image
              src={mainImg}
              style={{
                height: "500px",
                objectFit: "cover",
                borderRadius: "3%",
              }}
            ></Image>
            {/* Add your content here */}
          </div>

          {/* ThirdImg box (Three images with reduced height) */}
          <div className="col-span-1 ">
            <div className="grid grid-rows-3 gap-4 h-[500px]">
              <ImageCard image={oneImg} heading="Modern Student Housing" />
              <ImageCard image={twoImg} heading="Co-living for Professionals" />
              <ImageCard image={thirdImg} heading="Managed Apartments" />
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};
export default Main;


const ImageCard = ({ image = "", heading = "Default text" }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 relative">
      <Image src={image} className="object-cover w-full h-full rounded-lg" alt={image} />

      <div className="absolute top-5 left-5 w-[10rem]" >
        <div className="font-semibold text-gray-800  text-3xl sm:text-4xl md:text-1xl lg:text-xl ">
          {heading}
        </div>
      </div>

      <div className="absolute bottom-3 left-5 bg-white w-8 h-8 flex justify-center items-center rounded-full cursor-pointer">
        <ArrowRightIcon width={22} height={22} />
      </div>
    </div>
  )
}
