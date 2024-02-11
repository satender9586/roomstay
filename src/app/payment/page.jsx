"use client"
import { Button } from "@/components/ui/button"
// import Image from "next/image"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import  Label from "@/components/ui/label"
import { useRouter } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import checkCircleIcon from "../../../assests/Icons/checkcircleicon.png"
import Image from "next/image";
const Payment = () => {

    const router = useRouter();


    return (

        <div className="w-[100dvw] h-[100vh] flex flex-row justify-center items-center  p-5">
            <div className="flex justify-between border-[1px] items-center border-gray-200 shadow-md  rounded-xl p-10 w-[980px]">
                <div >
                    <div className="flex flex-col justify-center gap-2 pb-2">
                        <div className="text-3xl font-semibold ">
                            Card information
                        </div>

                        <p className="text-gray-600 w-[300px] ">Indicate detailes of the card from which money will be debited</p>
                    </div>

                    <div className=" flex flex-row  justify-center items-center  h-[230px] lg:w-[350px] md:w-[800px] sm:w-[700px] p-3 rounded-2xl shadow-xl border-[0.4px] border-gray-200   ">
                        <div className=" w-full  flex-[1.3] flex flex-col items-center justify-center ">


                            <div className="flex flex-col justify-center gap-2 p-3 w-full h-full ">

                                <div className="flex flex-col items-start">
                                    <Label className=" text-gray-500 text-sm " >Card Number</Label>
                                    <input type="text" placeholder="0000 0000 0000 0000" className="border-b border-gray-400 w-full pr-3 py-2 placeholder:text-sm focus:placeholder:text-gray-600 focus:outline-none focus:border-blue-500" />




                                </div>

                                <div className="flex w-full justify-between">
                                    <div className="flex flex-col items-start mt-5">
                                        <Label className=" text-gray-500 text-sm" >Month and year</Label>
                                        <input type="text" placeholder="00 / 00" className="border-b border-gray-400  w-[60px] pr-3 py-2 placeholder:text-sm focus:placeholder:text-gray-600 focus:outline-none focus:border-blue-500" />
                                    </div>
                                    <div className="flex flex-col items-start mt-5">
                                        <Label className=" text-gray-500 text-sm" >CVV code</Label>
                                        <input type="password" placeholder="***" className="border-b border-gray-400  w-[50px] pr-3 py-2 placeholder:text-sm focus:placeholder:text-gray-600 focus:outline-none focus:border-blue-500" />
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
                <div >
                    <div className="flex flex-col justify-center pb-2">
                        <div className="text-3xl font-semibold ">
                            Personal Information
                        </div>
                    </div>

                    <div className=" flex flex-row  justify-center items-center   lg:w-[500px] md:w-[800px] sm:w-[600px] p-3 rounded-3xl   ">
                        <div className=" w-full  flex-[1.3] flex flex-col items-center justify-center ">


                            <div className="flex flex-col justify-center gap-6 p-3 w-full h-full ">

                                <div className="flex gap-4 w-full">
                                    <div>
                                        <Input type="text" placeholder="First Name" className="h-[50px] w-[218px] focus:border-[1px] focus:placeholder:text-gray-800 focus:border-blue-500 focus:outline-none  px-5 rounded-3xl" />
                                    </div>

                                    <div>
                                        <Input type="text" placeholder="Last Name" className="h-[50px] w-[218px] focus:border-[1px] focus:placeholder:text-gray-800 focus:border-blue-500 focus:outline-none px-5 rounded-3xl" />
                                    </div>

                                </div>
                                <div>
                                    <Input type="email" placeholder="Enter your email" className="h-[50px] focus:border-[1px] focus:placeholder:text-gray-800 focus:border-blue-500 focus:outline-none px-5 rounded-3xl" />
                                </div>

                                <div>
                                    <Select className="bg-white">
                                        <SelectTrigger className="px-5 h-[50px] rounded-3xl">
                                            <SelectValue placeholder="Select a your country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup className="bg-white">
                                                <SelectLabel>Country</SelectLabel>
                                                <SelectItem value="america">America</SelectItem>
                                                <SelectItem value="india">India</SelectItem>
                                                <SelectItem value="russia">Russia</SelectItem>
                                                <SelectItem value="china">China</SelectItem>
                                                <SelectItem value="autralia">Autralia</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex gap-4 w-full">
                                    <div>
                                        <Input type="text" placeholder="City" className="h-[50px] w-[218px] focus:border-[1px] focus:placeholder:text-gray-800 focus:border-blue-500 focus:outline-none  px-5 rounded-3xl" />
                                    </div>

                                    <div>
                                        <Input type="number" placeholder="Zip code" className="h-[50px] w-[218px] focus:border-[1px] focus:placeholder:text-gray-800 focus:border-blue-500 focus:outline-none px-5 rounded-3xl" />
                                    </div>

                                </div>

                                <div>
                                    <Input type="number" placeholder="Enter your Phone number" className="h-[50px] rounded-3xl focus:border-[1px] focus:placeholder:text-gray-800 focus:border-blue-500 focus:outline-none px-5" />
                                </div>


                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;

