"use client"
import React from "react"
import { TbAirConditioning, TbWifi } from "react-icons/tb"
import Header from "@/components/Landing/Header"
import { useRouter } from "next/navigation"
import Bussinessanalyst from "../../../assests/Images/hotelroom.jpg"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { StarIcon } from "@radix-ui/react-icons"
const RoomListing = () => {
  const arryLength = Array.from({ length: 4 })
  const router = useRouter()

  return (
    <>
      <Header />
      {/* <div className="container mb-16">
        <div className="p-4 grid grid-cols-5 gap-4 ">
          <div className="col-span-1 mt-3">
            <h1 className="font-md  text-sm md:text-[1.4rem]">Filter</h1>
          </div>
          <div className="col-span-4 space-y-10">
            {arryLength.map((data, index) => (
              <div
                className="grid grid-cols-5 gap-5 mt-3"
                onClick={() => {
                  router.push("/rooms/123")
                }}
              >
                <div className="bg-red-500 w-[400px]">
                  <img
                    width={"100%"}
                    height={"auto"}
                    className="rounded-2xl h-[210px] "
                    style={{ objectFit: "cover" }}
                    src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </div>
                <div className="col-span-3">
                  <h1 className="text-[2rem] font-bold">
                    Flagship White Diamond
                  </h1>
                  <h1 className="text-[1rem] font-bold capitalize text-gray-900">
                    opposite Shraddhanand college, Delhi
                  </h1>
                 
                  <div className="mt-3 flex gap-10 ">
                    <div className="flex items-center gap-1">
                      <TbAirConditioning className="size-6" /> <span>AC</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TbAirConditioning className="size-6" /> <span>WiFi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TbAirConditioning className="size-6" /> <span>AC</span>
                    </div>
                  </div>
                  <div className=" flex justify-between mt-[1rem]">
                    <div>
                      <h1 className="flex items-center gap-1 md:text-[1.2rem] ">
                        450{" "}
                        <span
                          className="flex items-center "
                          style={{ textDecoration: "line-through" }}
                        >
                          ₹434
                        </span>
                      </h1>
                    </div>
                    <div className="flex items-center justify-center px-10 gap-3">
                      <button
                        className="p-[0.7rem] px-[1rem]  bg-white  text-md text-black rounded-full"
                        style={{ border: "1px solid #E9E9E9" }}
                      >
                        view Details
                      </button>
                      <button className="p-[0.7rem] px-[1rem]  bg-green-500  text-md text-white rounded-full">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="">
        {arryLength.map((item, index) => (
          <div className="flex justify-center gap-4 p-4" key={index}>
            <div>
              <Image
                src={Bussinessanalyst}
                alt="image"
                width={340}
                className="rounded-xl border "
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[30px] font-bold">
                Flagship white Diamond
              </div>

              <div className="text-blue-800 text-[15px] font-semibold">
                Hotel Tourist Deluxe, 7361, Babu Ram Solanki Marg Ram Nagar, New
                Delhi
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
              <div className="flex justify-between items-center mt-4">
                <div className="pl-3">
                  <div className="text-[20px] font-bold">₹1434</div>
                  <div className="text-xs text-gray-500">1 Room per night</div>
                </div>

                <div className="flex items-center justify-center  gap-3">
                  <Button
                    className="p-[0.7rem] px-[1rem]  bg-white hover:bg-gray-100 py-6 text-md  text-black rounded-full"
                    style={{ border: "1px solid #E9E9E9" }}
                    onClick={() => {
                      router.push("/rooms/123")
                    }}
                  >
                    view Details
                  </Button>
                  <Button className="p-[0.7rem] px-[1.5rem]  bg-green-500 hover:bg-green-600 py-6 text-md text-white rounded-full">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default RoomListing
