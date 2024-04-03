import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Cards = () => {
  const arryLength = Array.from({ length: 4 });
  return (
    <div className="py-24">
      < div className="container " >
        {/* image conatiner */}
        < div className="text-6xl font-medium" > Featured Rooms</div >
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {arryLength.map((data, index) => (
            <div key={index} className="bg-white p-2 rounded-lg">
              <div className="relative">
                <img
                  width={"100%"}
                  height={"auto"}
                  className="rounded-[8px] h-[300px]"
                  src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div className="absolute top-5 right-5">
                  <FaHeart className="size-6" />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <h1 className="font-bold text-lg text-[#304553]">
                  Palkot, Thailand
                </h1>
                {/* <div className="flex justify-between items-center gap-1">
                  <FaStar /> <span>5.0</span>
                </div> */}
              </div>
              <h1 className="font-normal text-sm text-[#71719F]">
                3019 kilometeraway
              </h1>
              <h1 className="font-normal text-sm text-[#71719F]">
                20-25 Feb
              </h1>
              <h1 className="font-bold text-sm text-[#268029] mb-2">
                1,49,650 per night
              </h1>
            </div>
          ))}
        </div>
      </div >
    </div >
  );
};

export default Cards;
