import React from "react"
import { FaStar } from "react-icons/fa6"
import { FaHeart } from "react-icons/fa"
import { CarouselRoom } from "./CarousalRoom"
import { GiDoor } from "react-icons/gi"

const Cards = () => {
  const roomsData = [
    {
      id: 1,
      name: "Crowne Plaza, An Ihg Hotel",
      price: 6000,
      distance: "19 Kilometer",
      img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/ab/54/7023d7e60711ad1c7a0ed9a4e34699e5e5213ae0d147158f5b85597293d6.jpeg",
    },
    {
      id: 2,
      name: "Novotel Goa Resort and Spa",
      price: 4000,
      distance: "40 Kilometer",
      img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/ef/ba/29dcda220bc3cd8358746497e0bfd628a06abd13c244f0a53380159a1b02.jpeg",
    },
    {
      id: 3,
      name: "Four Points",
      price: 3999,
      distance: "20 Kilometer",
      img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/65/59/462093381e989f8db00f8deec6313c976440ff91afb2dded25cf60c4fed5.jpeg",
    },
    {
      id: 4,
      name: "Fairfield by Marriott",
      price: 4459,
      distance: "40 Kilometer",
      img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/61/dc/916e171ef253cee37d6dd88b746ac5233a6f515aa12b9f46d621c7f66e8d.jpeg",
    },
    {
      id: 5,
      name: "Grand Mercure ",
      price: 11000,
      distance: "12 Kilometer",
      img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/e0/2b/5b9b831bbdf8da2cb6e35d2d331c715f0d2e8d3165d5b0773267a1f66c4f.jpeg",
    },
    ,
    {
      id: 6,
      name: "Taj Club House",
      price: 8999,
      distance: "555 Kilometer",
      img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/7d/c2/e42d74d47f8a994b33138992eb2ef21b71df296b83cf7b3f7af0b999d21f.jpeg",
    },
  ]
  const arryLength = Array.from({ length: 4 })
  return (
    <div className="py-24  bg-gray-50">
      <div className="container ">
        {/* image conatiner */}
        <div className=" mb-4 flex items-center ">
          <GiDoor className="w-8 h-8 " />
          <div className="text-4xl pl-2 font-medium font-sans">
            {" "}
            Featured Rooms
          </div>
        </div>

        <CarouselRoom roomsData={roomsData} />
      </div>
    </div>
  )
}

export default Cards
