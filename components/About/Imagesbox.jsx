import React from "react";
import Image from "next/image";
import arrowIcon from "../../assests/Icons/arrowIcon.svg";
import firstimg from "../../assests/sateimages/2.jpg";
import second from "../../assests/sateimages/1.jpg";
import third from "../../assests/sateimages/3.jpg";
import forth from "../../assests/sateimages/4.jpg";

const Imagebox = () => {
  return (
    <div className="container bg-green-500 ">
      <div className="p-4 border-red-100">
        <h2 className="font-heading font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl | mb-12 lg:mb-10">
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
              <h1 className="font-heading font-bold text-white  text-3xl sm:text-4xl md:text-5xl lg:text-6xl | mb-12 lg:mb-3">
                Stay with the
              </h1>
              <h1 className="font-heading font-bold text-gray-900  text-3xl sm:text-4xl md:text-5xl lg:text-6xl | mb-12 lg:mb-3">
                your parter and
              </h1>
              <h1 className="font-heading font-bold  text-blue-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl | mb-12 lg:mb-3">
                your family member
              </h1>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full mt-6">
                Know More
              </button>
            </div>
          </div>

          <div className="col-span-1 bg-gray-300" style={{ height: "500px" }}>
            <Image
              src={firstimg}
              style={{ height: "500px", objectFit: "cover" }}
            ></Image>
            {/* Add your content here */}
          </div>

          {/* Third box (Three images with reduced height) */}
          <div className="col-span-1 ">
            <div className="grid grid-rows-3 gap-4" style={{ height: "500px" }}>
              {/* First image */}
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={forth}
                  className="object-cover w-full h-full"
                  style={{ height: "160px", objectFit: "cover" }}
                ></Image>
              </div>
              {/* Second image */}
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={second}
                  className="object-cover w-full h-full"
                  style={{ height: "160px", objectFit: "cover" }}
                ></Image>
              </div>
              {/* Third image */}
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={third}
                  className="object-cover w-full h-full"
                  style={{ height: "155px", objectFit: "cover" }}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Imagebox;
