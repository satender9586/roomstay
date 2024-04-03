import Image from "next/image";
import React from "react";
import { CiIceCream } from "react-icons/ci";
import priceOneImg from "../../../assests/Images/price1.png"
import priceTwoImg from "../../../assests/Images/price2.png"
import priceThreeImg from "../../../assests/Images/price3.png"

const Pricing = () => {
  return (
    <div className="py-16">
      <div className=" container">
        <div className="flex flex-col items-start sm:items-center w-full">
          <h1 className="font-heading font-bold text-4xl sm:text-3xl md:text-4xl lg:text-4xl">
            Get the most out of your
            <span className="sm:hidden">mobile with the right subscription</span>
          </h1>
          <h1 className="hidden sm:block font-heading font-bold text-2xl md:text-4xl lg:text-4xl">
            with the right subscription
          </h1>
        </div>

        {/*Three Cards */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-4 md:gap-5 lg:gap-10 xl:gap-18 py-4 lg:px-[12%]">
          <div className="w-full md:w-[60%] lg:w-[80%] xl:w-[30%] mb-6">
            <PriceCard image={priceOneImg} heading={"Ice Mobile 10Gb"} text={'Up to 100mbit/s'} price={'299'} cardColor={"bg-[#FFFBEC]"} />
          </div>
          <div className="w-full md:w-[60%] lg:w-[80%] xl:w-[30%] mb-6">
            <PriceCard image={priceTwoImg} heading={"Telia Mobil 15GB"} text={'Up to 200mbit/s'} price={'350'} cardColor={"bg-[#F9ECFF]"} />
          </div>
          <div className="w-full md:w-[60%] lg:w-[80%] xl:w-[30%] mb-6">
            <PriceCard image={priceThreeImg} heading={"Ice Mobile 10Gb"} text={'Up to 400mbit/s'} price={'400'} cardColor={"bg-[#ECEEFF]"} />
          </div>
        </div>

        <div className="flex justify-center mt-3 md:mt-5">
          <div className="w-[212px] h-14 px-6 py-4 bg-slate-900 rounded-[41px] justify-center items-start gap-2.5 inline-flex">
            <button className="text-white text-base font-normal">
              See All Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;


const PriceCard = ({ image, heading = "", text = "", price = "200", cardColor = "bg-[#FFFBEC]" }) => {
  return (
    <div className={`h-[326px] ${cardColor} rounded-[14px] relative`}>
      <div className="h-full p-10 bg-white rounded-[14px] shadow absolute top-5 left-5 right-0">


        <Image src={image} alt="pricing"
          width={'auto'}
          height={'auto'}
        />
        <div className="flex flex-col gap-1  mt-4">
          <h1 className="text-slate-900 text-lg font-bold">
            {heading}
          </h1>
          <div className="text-[#171435] text-sm font-semibold">
            {text}
          </div>
        </div>
        <div>
          <div className="text-slate-900 text-2xl font-bold mt-4">
            ₹ {price} {" "} <span className="text-lg font-normal">/ month</span>
          </div>
        </div>
        <div className="flex items-center mt-10">
          <button className="text-slate-900 text-base font-semibold  h-14 px-6 py-2 bg-slate-100 rounded-[41px] shadow border border-gray-100 flex justify-center items-center gap-2.5">
            Add Subscription
          </button>
        </div>
      </div>
    </div>
  )
}