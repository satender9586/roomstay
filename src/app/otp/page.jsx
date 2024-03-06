"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { otpVerify, resendOtp } from "../../../api/authentication";

import checkCircleIcon from "../../../assests/Icons/checkcircleicon.png"
import Image from "next/image";
const Otp = () => {
    // const userObj = useSelector((state) => state.user.userObj)
    const emailRex = useSelector((state) => state.user.userObj.email);
    const router = useRouter();


    const [formValues, setFormValues] = useState({ otp: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        const newObject = { ...formValues, [name]: value };
        setFormValues({ ...newObject });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!(formValues.otp)) {
            alert("Please fill otp field")
            return
        }

        const dummyData = {
            "otp": formValues.otp,
            "email": emailRex
        }

        try {
            const response = await otpVerify(dummyData);
            if (response.success) {
                router.push("/dashboard")
            }
        } catch (error) {
            console.log(error)
        }

    }

    const resendOtpHandler = async (e) => {
        e.preventDefault();

        const dummyData = {
            "email": emailRex
        }

        try {
            const response = await resendOtp(dummyData);
            if (response.success) {
                alert("OTP resent successfully")
                return
            }
        } catch (error) {
            console.log(error)
        }

    }



    return (

        <div className="w-[100dvw] h-[100vh] flex flex-col justify-center items-center bg-gray-200 p-5">
            <div className=" flex flex-row  justify-center items-center w-full h-fill lg:w-[1110px] md:w-[800px] sm:w-[700px] p-10 bg-white rounded-3xl  shadow-lg  ">
                <div className=" w-full  flex-[1.3] flex flex-col items-center justify-center ">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col items-center justify-center gap-8  w-full  h-full ">
                            <div className="text-3xl pb-4 w-full ">
                                Verify Account
                            </div>

                            <div className="w-full my-5 pb-5">
                                <Label className=" font-semibold" >Verify OTP</Label>
                                <Input type="number" value={formValues.otp} name="otp" onChange={handleChange} placeholder="Enter the OTP" className="h-[50px]" />
                            </div>

                            {/* <div>
                            <Label className=" font-semibold" >Password</Label>
                            <Input type="password" placeholder="Enter your password" className="h-[50px]" />
                        </div>

                        <div>
                            <Label className=" font-semibold" >Confirm Password</Label>
                            <Input type="password" placeholder="Enter your confirm password" className="h-[50px]" />
                        </div> */}


                        </div>

                        <Button className="w-[450px] h-[60px] rounded-xl bg-neutral-700 hover:bg-neutral-900">Verify</Button>
                    </form>
                    <div className="py-10">
                        <div className=" cursor-pointer">
                            <span className="text-green-500" onClick={resendOtpHandler}> Resend OTP /</span> <span className="text-green-500" onClick={() => { router.push("/login") }}> Back to Login</span>
                        </div>
                    </div>

                </div>
                <div className="h-[800px] w-full rounded-2xl flex flex-[0.7] p-20" style={{ background: "linear-gradient(#B78FE8, rgb(139,92,246)" }}>
                    <div className="flex flex-col gap-8 ">
                        <div className="flex flex-col w-[240px] gap-2">
                            <Image src={checkCircleIcon} alt="email" width={32} height={32} className="bg-white rounded-full p-[1px] " />
                            <div className="text-xl text-white">Quick and free log-in</div>
                            <div className="text-sm text-white">Enter your email address to login an account.</div>
                        </div>
                        <div className="flex flex-col  w-[240px] gap-2">
                            <Image src={checkCircleIcon} alt="email" width={32} height={32} className="bg-white rounded-full p-[1px] " />

                            <div className="text-xl text-white">Cross-platform soluation</div>
                            <div className="text-sm text-white">Preview your newsletters on any device before sending them out</div>
                        </div>

                        <div className="flex flex-col w-[240px] gap-2">
                            <Image src={checkCircleIcon} alt="email" width={32} height={32} className="bg-white rounded-full p-[1px] " />

                            <div className="text-xl text-white">Start sending emails</div>
                            <div className="text-sm text-white">Use our API or pick our pre-built templates.</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Otp;

