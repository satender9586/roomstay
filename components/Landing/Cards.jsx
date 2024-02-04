import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Cards = () => {
  const arryLength = Array.from({ length: 4 });
  return (
    <div className="container mt-16 mb-14">
      <div className="p-4">
        {/* image conatiner */}
        <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {arryLength.map((data) => (
            <div className="bg-white rounded-sm">
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
              <div className="flex justify-between">
                <h1 className="font-bold text-[#304553] font-popplins">
                  Palkot, Thailand
                </h1>
                <div className="flex justify-between items-center gap-1">
                  <FaStar /> <span>5.0</span>
                </div>
              </div>
              <h1 className="font-normal text-[#71719F] font-popplins">
                3019 kilometeraway
              </h1>
              <h1 className="font-normal text-[#71719F] font-popplins">
                20-25 Feb
              </h1>
              <h1 className="font-bold text-[#304553] font-popplins">
                1,49,650 per night
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
