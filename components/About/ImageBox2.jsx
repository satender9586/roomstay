import React from "react";
import { CiIceCream } from "react-icons/ci";

const ImageBox2 = () => {
  return (
    <div className="container ">
      <div className="p-4 pb-[5rem]">
        <div
          className="p-4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl ">
            Get the most out of your mobile
          </h1>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-2xl lg:text-4xl ">
            with the right subscription
          </h1>
          <div
            className="p-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-2xl lg:text-sm opacity-35">
              All device come with free delivery on pickup as standared. See
              infomation on
            </h1>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-2xl lg:text-sm opacity-35">
              available shopping option for your location
            </h1>
          </div>
        </div>
        {/* carts */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: "40px",
            padding: "2rem 0",
          }}
        >
          <div
            className="bg-[#FFFBEC] w-[280px] h-[320px] rounded-md shadow-2xl "
            style={{ position: "relative" }}
          >
            <div className="bg-[#FFFFFF] w-[280px] h-[320px] shadow-2xl rounded-md  p-9 absolute top-5 left-5">
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <CiIceCream className="size-8 font-bold" />
                </div>
                <h1 className="text-[25px] font-bold">Ice</h1>
              </div>
              <div>
                <div>
                  <h1 className="text-[18px] font-bold text-[#242140]">
                    Ice Mobile 10Gb
                  </h1>
                </div>
                <h1 className="text-[15px] font-bold mt-2">Up to 100mbit/s</h1>
              </div>
              <div>
                <div>
                  <h1 className="text-[18px] font-bold mt-2">299-/ Month</h1>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="bg-[#F4F5FA] p-3 px-5 rounded-md font-bold  shadow-xl mt-5">
                  Add Subscribe
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-[#F9ECFF] w-[280px] h-[320px] rounded-md shadow-2xl "
            style={{ position: "relative" }}
          >
            <div className="bg-[#FFFFFF] w-[280px] h-[320px] shadow-2xl rounded-md  p-9 absolute top-5 left-5">
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <CiIceCream className="size-8 font-bold" />
                </div>
                <h1 className="text-[25px] font-bold">Ice</h1>
              </div>
              <div>
                <div>
                  <h1 className="text-[18px] font-bold text-[#242140]">
                    Ice Mobile 10Gb
                  </h1>
                </div>
                <h1 className="text-[15px] font-bold mt-2">Up to 100mbit/s</h1>
              </div>
              <div>
                <div>
                  <h1 className="text-[18px] font-bold mt-2">299-/ Month</h1>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="bg-[#F4F5FA] p-3 px-5 rounded-md font-bold  shadow-xl mt-5">
                  Add Subscribe
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-[#F9ECFF] w-[280px] h-[320px] rounded-md shadow-2xl "
            style={{ position: "relative" }}
          >
            <div className="bg-[#FFFFFF] w-[280px] h-[320px] shadow-2xl rounded-md  p-9 absolute top-5 left-5">
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <CiIceCream className="size-8 font-bold" />
                </div>
                <h1 className="text-[25px] font-bold">Ice</h1>
              </div>
              <div>
                <div>
                  <h1 className="text-[18px] font-bold text-[#242140]">
                    Ice Mobile 10Gb
                  </h1>
                </div>
                <h1 className="text-[15px] font-bold mt-2">Up to 100mbit/s</h1>
              </div>
              <div>
                <div>
                  <h1 className="text-[18px] font-bold mt-2">299-/ Month</h1>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="bg-[#F4F5FA] p-3 px-5 rounded-md font-bold  shadow-xl mt-5">
                  Add Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="bg-[#171435] text-white p-3 px-5 rounded-md   shadow-2xl mt-5">
            See All Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageBox2;
