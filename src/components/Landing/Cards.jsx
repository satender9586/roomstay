import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { getAllRooms } from "../../../api/roomApi";

const Cards = () => {
  const arryLength = Array.from({ length: 4 });

  const [allRooms, setAllRooms] = useState([]);
  const handleFetchRooms = async () => {
    try {
      const response = await getAllRooms();
      if (response?.success) {
        setAllRooms(response?.data);
      }
      console.log(response, "res");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchRooms();
  }, []);

  return (
    <div className="py-24  bg-gray-50">
      <div className="container ">
        {/* image conatiner */}
        <div className="text-6xl font-medium"> Featured Rooms</div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 ">
          {allRooms.map((data, index) => (
            <div key={index} className="bg-white p-2 rounded-lg hover:shadow-lg hover:scale-105 ease-in-out duration-500">
              <div className="relative">
                <img
                  width={"100%"}
                  height={"auto"}
                  className="rounded-[8px] h-[300px]"
                  src={data?.Hotel?.image}
                />
              </div>
              <div className="flex justify-between mt-2">
                <h1 className="font-bold text-lg text-[#304553]">
                  {data?.Hotel?.name}
                </h1>
                {/* <div className="flex justify-between items-center gap-1">
                  <FaStar /> <span>5.0</span>
                </div> */}
              </div>
              <h1 className="font-normal text-sm text-[#71719F]">
                {data?.Hotel?.location}
              </h1>
              <h1 className="font-bold text-sm text-blue-600 mb-2">
                ₹ {data?.price}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
