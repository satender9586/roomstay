import Image from "next/image";
import React from "react";
import { CiIceCream } from "react-icons/ci";
import priceOneImg from "../../assests/Images/price1.png"
import priceTwoImg from "../../assests/Images/price2.png"
import priceThreeImg from "../../assests/Images/price3.png"

const Pricing = () => {
  return (
    <div className=" bg-[#ffe9b5] py-6">
      <div className="p-4 pb-[3rem] container">
        <div class="md:p-4 flex flex-col items-start sm:items-center w-full">
          <h1 class="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
            Get the most out of your
            <span class="sm:hidden">mobile with the right subscription</span>
          </h1>
          <h1 class="hidden sm:block font-heading font-bold text-2xl md:text-4xl lg:text-4xl">
            with the right subscription
          </h1>
          <div class="sm:p-4 flex flex-col items-start sm:items-center w-full">
            <div class="font-heading font-semibold text-black text-base sm:text-2xl md:text-2xl lg:text-base opacity-35">
              All devices come with free delivery on pickup as standard. See
              information on{" "}
              <span class="sm:hidden">
                available shopping options for your location
              </span>
            </div>
            <div class="hidden sm:block font-heading font-semibold  text-base sm:text-2xl md:text-2xl lg:text-base opacity-35">
              available shopping options for your location
            </div>
          </div>
        </div>

        {/*Three Cards */}
        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-5 lg:gap-10 xl:gap-18 py-4 lg:px-[12%]">
          <div class="w-full sm:w-[48%] md:w-[48%] lg:w-[30%] xl:w-[30%] mb-6">
            <PriceCard image={priceOneImg} heading={"Ice Mobile 10Gb"} text={'Up to 100mbit/s'} price={'299'} cardColor={"bg-[#FFFBEC]"}/>
          </div>
          <div class="w-full sm:w-[48%] md:w-[48%] lg:w-[30%] xl:w-[30%] mb-6">
            <PriceCard image={priceTwoImg} heading={"Telia Mobil 15GB"} text={'Up to 200mbit/s'} price={'350'} cardColor={"bg-[#F9ECFF]"}/>
          </div>
          <div class="w-full sm:w-[48%] md:w-[48%] lg:w-[30%] xl:w-[30%] mb-6">
            <PriceCard image={priceThreeImg} heading={"Ice Mobile 10Gb"} text={'Up to 400mbit/s'} price={'400'} cardColor={"bg-[ECEEFF]"}/>
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


const PriceCard = ({image,heading="",text="",price="200",cardColor="bg-[#FFFBEC]"}) => {
  return (
    <div class={`h-[326px] ${cardColor} rounded-[14px] relative`}>
      <div class="h-full p-10 bg-white rounded-[14px] shadow absolute top-5 left-5 right-0">


        <Image src={image} alt="pricing"
          width={'auto'}
          height={'auto'}
        />
        <div className="flex flex-col gap-1  mt-4">
          <h1 class="text-slate-900 text-lg font-bold">
            {heading}
          </h1>
          <div class="text-[#171435] text-sm font-semibold">
            {text}
          </div>
        </div>
        <div>
          <div class="text-slate-900 text-2xl font-bold mt-4">
            ₹ {price} {" "} <span className="text-lg font-normal">/ month</span>
          </div>
        </div>
        <div class="flex items-center mt-10">
          <button class="text-slate-900 text-base font-semibold  h-14 px-6 py-2 bg-slate-100 rounded-[41px] shadow border border-gray-100 flex justify-center items-center gap-2.5">
            Add Subscription
          </button>
        </div>
      </div>
    </div>
  )
}