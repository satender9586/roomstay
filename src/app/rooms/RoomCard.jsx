import { Button } from "@/components/ui/button";
import { StarIcon } from "@radix-ui/react-icons";
import { TbAirConditioning, TbWifi } from "react-icons/tb";
import { useRouter } from "next/navigation";
import React from "react";

const RoomCard = ({ obj }) => {
  const { description, price, roomNumber, amenities, _id, Hotel } = obj;

  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 border shadow-lg rounded-lg mt-2 p-4 w-full max-w-5xl mx-auto">
      {/* Image Section */}
      <img
        src={Hotel?.image[0]}
        alt="image"
        className="w-full lg:w-[340px] h-[240px] lg:h-[340px] object-cover rounded-xl border"
      />

      {/* Content Section */}
      <div className="flex flex-1 flex-col gap-2">
        {/* Hotel Name */}
        <div className="text-[24px] lg:text-[30px] font-bold">
          {Hotel?.name}
        </div>

        {/* Description */}
        <div className=" text-[14px] lg:text-[15px] font-light">
          {description}
        </div>

        {/* Amenities and Rating */}
        <div className="flex justify-between items-center mt-2">
          {/* Amenities */}
          <div className="flex gap-4">
            <div className="flex flex-col justify-center items-center mt-2">
              <TbAirConditioning className="size-6" />
              <div className="text-[12px]">AC</div>
            </div>

            <div className="flex flex-col justify-center items-center mt-2">
              <TbWifi className="size-6" />
              <div className="text-[12px]">Wifi</div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center mt-4">
          <div className="pl-3">
            <div className="text-[20px] font-bold">₹{price}</div>
            <div className="text-xs text-gray-500">1 Room per night</div>
          </div>

          <Button
            className="py-2 px-4 bg-white hover:bg-gray-100 text-md text-black rounded-full border border-gray-300"
            onClick={() => {
              router.push(`/rooms/${_id}`);
            }}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
