import { Button } from "@/components/ui/button"
import { StarIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"
import { TbAirConditioning, TbWifi } from "react-icons/tb"
import HotelRoom from "../../../assests/Images/hotelroom.jpg"

const RoomCard = ({ obj }) => {
  const { description, price, roomNumber, amenities, _id, Hotel } = obj

  const router = useRouter()
  return (
    <div className=" flex  gap-10 border shadow-lg rounded-lg mt-2 p-4 container ">
      <img
        src={Hotel?.image[0]}
        alt="image"
        width={340}
        height={340}
        className="rounded-xl border "
        style={{ objectFit: "cover" }}
      />
      <div className="flex flex-1 flex-col gap-2">
        <div className="text-[30px] font-bold">{Hotel?.name}</div>

        <div className="text-blue-800 text-[15px] font-semibold">
          {description}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex flex-col justify-center items-center mt-2 pl-3">
              <TbAirConditioning className="size-6" />
              <div className="text-[12px]">AC</div>
            </div>

            <div className="flex flex-col justify-center items-center mt-2 pl-3">
              <TbWifi className="size-6" />
              <div className="text-[12px]">Wifi</div>
            </div>
          </div>

          <div className="flex gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>

        <div className="flex justify-between items-center  mt-4">
          <div className="pl-3">
            <div className="text-[20px] font-bold">₹{price}</div>
            <div className="text-xs text-gray-500">1 Room per night</div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button
              className="p-[0.7rem] px-[1rem]  bg-white hover:bg-gray-100 py-6 text-md  text-black rounded-full"
              style={{ border: "1px solid #E9E9E9" }}
              onClick={() => {
                router.push("/rooms/123")
              }}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
