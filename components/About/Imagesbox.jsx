import React from "react";
import Image from "next/image";
import firstimg from "../../assests/sateimages/2.jpg";
import third from "../../assests/sateimages/3.jpg";
import { FaArrowCircleRight } from "react-icons/fa";

const Imagebox = () => {
  return (
    <div className="container">
      <div className="p-4 border-red-100">
        <h2 className="font-heading font-medium text-3xl sm:text-4xl md:text-5xl lg:text-5xl | mb-12 lg:mb-10">
          Let's Come Together
        </h2>
        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-1" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                zIndex: 9999,
                width: "600px",
                top: "15%",
              }}
            >
              <h1 className="font-heading font-bold   text-2xl sm:text-4xl md:text-5xl lg:text-5xl | mb-12 lg:mb-3">
                Stay with the
              </h1>
              <h1 className="font-heading font-bold text-gray-900  text-3xl sm:text-4xl md:text-5xl lg:text-5xl | mb-12 lg:mb-3">
                your parter and
              </h1>
              <h1 className="font-heading font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-5xl | mb-12 lg:mb-3">
                your family member
              </h1>
              <div>
                <h1 className="font-heading  text-gray-900  text-3xl sm:text-4xl md:text-1xl lg:text-lg | mb-5 lg:mb-1">
                  Life at a professional manage
                </h1>
                <h1 className="font-heading  text-gray-900  text-3xl sm:text-4xl md:text-1xl lg:text-lg | mb-5 lg:mb-1">
                  accomodation awaite you
                </h1>
              </div>

              <button className="bg-purple-600 text-white px-6 py-3 rounded-full mt-6">
                Know More
              </button>
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
              src={firstimg}
              style={{
                height: "500px",
                objectFit: "cover",
                borderRadius: "3%",
              }}
            ></Image>
            {/* Add your content here */}
          </div>

          {/* Third box (Three images with reduced height) */}
          <div className="col-span-1 ">
            <div className="grid grid-rows-3 gap-4 h-[500px]">
              {/* First image */}
              <div
                className="aspect-w-16 aspect-h-9"
                style={{ borderRadius: "3%", position: "relative" }}
              >
                <Image
                  src={third}
                  className="object-cover w-full h-full"
                  style={{
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "3%",
                  }}
                ></Image>
                <div
                  style={{
                    position: "absolute",
                    top: "8%",
                    left: "7%",
                  }}
                >
                  <h1 className="font-heading font-bold  text-gray-100  text-3xl sm:text-4xl md:text-1xl lg:text-xl ">
                    Modern Student
                  </h1>
                  <h1 className="font-heading font-bold  text-gray-100  text-3xl sm:text-4xl md:text-1xl lg:text-xl ">
                    Housing
                  </h1>
                  <div
                    style={{
                      fontSize: "30px",
                      marginTop: "10%",
                    }}
                  >
                    <FaArrowCircleRight
                      style={{ fontSize: "40px", color: "white" }}
                    />
                  </div>
                </div>
              </div>
              {/* Second image */}
              <div
                className="aspect-w-16 aspect-h-9"
                style={{ borderRadius: "3%", position: "relative" }}
              >
                <Image
                  src={third}
                  className="object-cover w-full h-full"
                  style={{
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "3%",
                  }}
                ></Image>
                <div
                  style={{
                    position: "absolute",
                    top: "8%",
                    left: "7%",
                  }}
                >
                  <h1 className="font-heading font-bold  text-gray-100  text-3xl sm:text-4xl md:text-1xl lg:text-xl ">
                    Modern Student
                  </h1>
                  <h1 className="font-heading font-bold  text-gray-100  text-3xl sm:text-4xl md:text-1xl lg:text-xl ">
                    Housing
                  </h1>
                  <div
                    style={{
                      fontSize: "30px",
                      marginTop: "10%",
                    }}
                  >
                    <FaArrowCircleRight
                      style={{ fontSize: "40px", color: "white" }}
                    />
                  </div>
                </div>
              </div>
              {/* Third image */}
              <div
                className="aspect-w-16 aspect-h-9"
                style={{ borderRadius: "3%", position: "relative" }}
              >
                <Image
                  src={third}
                  className="object-cover w-full h-full"
                  style={{
                    height: "155px",
                    objectFit: "cover",
                    borderRadius: "3%",
                  }}
                ></Image>
                <div
                  style={{
                    position: "absolute",
                    top: "8%",
                    left: "7%",
                  }}
                >
                  <h1 className="font-heading font-bold  text-gray-100  text-3xl sm:text-4xl md:text-1xl lg:text-xl ">
                    Modern Student
                  </h1>
                  <h1 className="font-heading font-bold  text-gray-100  text-3xl sm:text-4xl md:text-1xl lg:text-xl ">
                    Housing
                  </h1>
                  <div
                    style={{
                      fontSize: "30px",
                      marginTop: "10%",
                    }}
                  >
                    <FaArrowCircleRight
                      style={{ fontSize: "40px", color: "white" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Imagebox;
