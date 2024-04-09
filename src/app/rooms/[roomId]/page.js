"use client"
import React from "react"
import { TbAirConditioning, TbWifi } from "react-icons/tb"
import { IoIosRadioButtonOff } from "react-icons/io"
import { FaRegStar } from "react-icons/fa"
import { GiConfirmed } from "react-icons/gi"
import { FaRupeeSign } from "react-icons/fa"
import Header from "@/components/Landing/Header"
import HotelRoom from "../../../../assests/Images/hotelroom.jpg"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { loadRazorpayScript } from "../../../../utils/payment"
import { paymentInit } from "../../../../api/paymentApi"
import { createOrder } from "../../../../api/orderApi"
const HotelInfo = () => {
  const displayRazorpay = async ({ amountRupee, planId }) => {
    try {
      const res = await loadRazorpayScript()

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?")
        return
      }

      // creating a new order
      const result = await paymentInit({
        amount: Math.floor(amountRupee * 100),
      })

      if (!result) {
        alert("Server error, Are you online?")
        return
      }

      const { amount, razorpayId, currency, KEY_ID, paymentId } = result.data

      const options = {
        key: KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Roomstay Organization",
        description: "Test Transaction",
        image: ROOMSTAY_LOGO,
        order_id: razorpayId,
        handler: async function (response) {
          const data = {
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            paymentId: paymentId,
            plan: planId,
          }

          try {
            const response = await createOrder(data)
          } catch (error) {
            console.log(error)
          }
        },
        prefill: {
          name: `${userRedux?.firstName} ${userRedux?.lastName}`,
          email: userRedux?.email || "abc@mail.com",
          contact: "9876543210",
        },
        notes: {
          address: "Roomstay Corporate",
        },
        theme: {
          color: "salmon",
        },
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    } catch (error) {
      console.log(error)
    }
  }

  const handlePayment = ({ amountRupee, planId }) => {
    displayRazorpay({ amountRupee, planId })
  }

  return (
    <>
      <Header />
      <div className="container">
        {/* background image attached    */}
        <div className=" relative">
          <Image
            src={HotelRoom}
            alt="image"
            className="rounded-md border h-[500px] "
            style={{ objectFit: "cover" }}
          />

          {/* <div className=" absolute right-4 bottom-4">
            <Carousel className="w-full max-w-[200px]">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div> */}
        </div>

        <div className="grid grid-cols-3 gap-6 my-5">
          <div className="col-span-2">
            <div>
              <div className="text-[30px] font-bold">
                Flagship white Diamond
              </div>
              <div className="text-blue-800 text-[15px] font-semibold">
                Hotel Tourist Deluxe, 7361, Babu Ram Solanki Marg Ram Nagar, New
                Delhi
              </div>
            </div>
            <div className="mt-[24px]">
              <h1 className="font-normal md:font-bold text-[#222222] font-popplins text-sm md:text-[1.3rem]">
                About this Room
              </h1>
              <h1 className="mt-2 leading-6 font-normal text-gray-800 font-popplins text-sm md:text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s
              </h1>
            </div>
            <div className="mt-[24px]">
              <h1 className="font-normal md:font-bold text-[#222222] font-popplins text-sm md:text-[1.3rem]">
                Amenities
              </h1>
              <div className="flex gap-6">
                <div className="flex flex-col justify-center items-center mt-2 pl-3">
                  <TbAirConditioning className="size-6" />
                  <div className="text-[12px]">AC</div>
                </div>

                <div className="flex flex-col justify-center items-center mt-2 pl-3">
                  <TbWifi className="size-6" />
                  <div className="text-[12px]">Wifi</div>
                </div>
              </div>
            </div>
            <div className="mt-[24px]">
              <h1 className="font-normal md:font-bold text-[#222222] font-popplins text-sm md:text-[1.3rem]">
                Hotel policies
              </h1>
              <div className="mt-[10px] pl-2">
                <div className="flex mt-1 items-center gap-2  text-gray-700 font-semibold text-sm font-popplins  md:text-[0.8rem]">
                  <IoIosRadioButtonOff /> Couples are welcome
                </div>
                <div className="flex mt-1 items-center gap-2  text-gray-700 font-semibold text-sm font-popplins  md:text-[0.8rem]">
                  <IoIosRadioButtonOff /> Guests can check in using any local or
                  outstation ID proof (PAN card not accepted).
                </div>
                <div className="flex mt-1 items-center gap-2  text-gray-700 font-semibold text-sm font-popplins  md:text-[0.8rem]">
                  <IoIosRadioButtonOff /> As a complimentary benefit, your stay
                  is now insured by Ack
                </div>
                <div className="flex mt-1 items-center gap-2  text-gray-700 font-semibold text-sm font-popplins  md:text-[0.8rem]">
                  <IoIosRadioButtonOff />
                  This hotel is serviced under the trade name of White Diamond
                  as per quality standards of OYO
                </div>
              </div>
            </div>
            <div className="mt-[24px] w-[80%] ">
              <h1 className="font-normal md:font-bold text-[#222222] font-popplins text-sm md:text-[1.3rem]">
                Choose Your Room
              </h1>
              <div className="mt-[10px] ">
                <div className="flex items-center gap-1 bg-gray-900  rounded-sm font-popplins text-[0.9rem] text-[#FBFAFC] pl-5">
                  <FaRegStar className="text-[#FFDC64]" />{" "}
                  <div>SELECTED CATEGORY</div>
                </div>
                <div
                  className="p-4 flex justify-between rounded-xl mt-2"
                  style={{ border: "1px solid #E9E9E9" }}
                >
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center  font-medium text-[1.5rem] ">
                        Classic{" "}
                      </div>
                      <div>
                        <CheckCircledIcon />
                      </div>
                    </div>
                    <h1 className="flex items-center  font-medium text-[0.9rem]">
                      Room size: 100 sqft{" "}
                    </h1>
                    <div className="flex gap-5 mt-[30px]">
                      <div className="flex items-center gap-1">
                        <TbAirConditioning className="size-6" /> <span>AC</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TbWifi className="size-6" /> <span>Wifi</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={HotelRoom}
                      alt="image"
                      width={240}
                      className="rounded-xl border "
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div
                  className="p-4 flex justify-between rounded-xl mt-1"
                  style={{ border: "1px solid #E9E9E9" }}
                >
                  <div>
                    <h1 className="flex items-center gap-1 md:text-[0.9rem]">
                      450{" "}
                      <span
                        className="flex items-center "
                        style={{ textDecoration: "line-through" }}
                      >
                        <FaRupeeSign />
                        434
                      </span>
                    </h1>
                    <h1 className="flex items-center md:text-[0.9rem]">
                      +<FaRupeeSign />
                      434 taxes & free
                    </h1>
                  </div>
                  <div
                    className="flex items-center justify-center px-10 rounded-xl"
                    style={{ border: "1px solid #E9E9E9" }}
                  >
                    <h1 className="text-[0.9rem] flex items-center gap-1 ">
                      <CheckCircledIcon />
                      SELECT
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div
              className="bg-[#F5F5F5] px-5  py-8 rounded-md"
              style={{ border: "1px solid #E9E9E9" }}
            >
              <h1 className="font-normal md:font-[400] text-[#222222] font-popplins text-sm md:text-[1.3rem]">
                Individual Plan
              </h1>

              <div
                className="mt-[1.5rem]"
                style={{ borderTop: "1px solid #CBCDD4" }}
              ></div>
              <div className="mt-[2.5rem]">
                <div className="flex   mt-[1rem]">
                  <h1 className="text-[14px]">Title</h1>
                  <h1 className="text-[14px] ml-[5rem]">Basic Packag</h1>
                </div>
                <div className="flex   mt-[1rem]">
                  <h1 className="text-[14px]">Description</h1>
                  <h1 className="text-[14px] ml-[2.1rem]">Basic Packag</h1>
                </div>
                <div className="flex mt-[1rem]">
                  <h1 className="text-[14px]">No Of Days</h1>
                  <h1 className="text-[14px] ml-[2.1rem]">Basic Packag</h1>
                </div>
                <div className="flex  mt-[1rem]">
                  <h1 className="text-[14px]">Revisions</h1>
                  <h1 className="text-[14px] ml-[2.9rem]">Basic Packag</h1>
                </div>
              </div>
              <div className="mt-[2.5rem] flex item-center justify-center">
                <button
                  className="p-[1.1rem] px-[2rem]  bg-green-500 rounded-full text-lg text-white "
                  onClick={() => {
                    handlePayment(200, "abs")
                  }}
                >
                  Continue($500)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelInfo
