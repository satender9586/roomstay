import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaHeart } from "react-icons/fa"
import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6"

export function CarouselRoom({ roomsData }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {roomsData?.map((obj) => (
          <CarouselItem key={obj?.id} className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-2">
                <div className="bg-white p-2 rounded-lg ">
                  <div className="relative">
                    <img
                      width={"100%"}
                      height={"auto"}
                      className="rounded-xl border h-[250px]"
                      src={obj?.img}
                      alt="img"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute top-5 right-5">
                      <FaHeart className="size-6" color="white" />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <h1 className="font-bold text-lg text-[#304553]">
                      {obj?.name}
                    </h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaLocationDot className="text-red-600 w-3 h-3" />
                    <h1 className="font-normal text-xs text-gray-900 ">
                      {obj?.distance}
                    </h1>
                  </div>
                  <h1 className="font-bold text-sm text-gray-950 mb-2">
                  ₹{obj?.price} per night
                  </h1>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
