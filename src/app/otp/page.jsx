"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import {
  changePassword,
  forget,
  otpVerify,
  resendOtp,
} from "../../../api/userApi";
import { useSelector } from "react-redux";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import roomstayLogo from "../../../assests/official/roomstay.png";
import Image from "next/image";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import backgroundImg from "../../../assests/Images/backgroundImg.png";
import { toast } from "sonner";

const Otp = () => {
  const emailRedux = useSelector((state) => state?.user?.email);
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams?.get("type") || false;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newObject = { ...formValues, [name]: value };
    setFormValues({ ...newObject });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "forget") {
      if (
        !(formValues.password && formValues.confirmPassword && formValues.otp)
      ) {
        alert("Please fill all the fields");
        return;
      }
      if (formValues.password !== formValues.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const apiData = {
        otp: formValues.otp,
        email: emailRedux,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword,
      };

      try {
        const response = await changePassword(apiData);
        if (response?.success) {
          console.log(response);
          router.push("/login");
          toast("Password changed successfully", {
            description: "Login with new password",
            position: "top-center",
          });
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (!formValues.otp) {
      alert("Please fill otp field");
      return;
    }

    const dummyData = {
      otp: formValues.otp,
      email: emailRedux,
    };

    try {
      const response = await otpVerify(dummyData);
      if (response.success) {
        router.push("/login");
        toast("Account created successfully", {
          description: "Login please",
          position: "top-center",
        });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resendOtpHandler = async (e) => {
    e.preventDefault();

    if (type === "forget") {
      const dummyData = {
        email: emailRedux,
      };

      try {
        const response = await forget(dummyData);
        if (response.success) {
          toast("Otp sent successfully", {
            description: "Check your inbox!",
            position: "top-center",
          });
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
    const dummyData = {
      email: emailRedux,
    };

    try {
      const response = await resendOtp(dummyData);
      if (response.success) {
        toast("Otp resent successfully", {
          description: "Check your inbox again!",
          position: "top-center",
        });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      {/* Background Image */}
      <Image
        src={backgroundImg}
        alt="Background"
        layout="fill"
        className="-z-20 object-contain" // Ensure the background image is behind everything
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 -z-10"></div>
      {/* Black overlay with 50% opacity */}
      {/* Content Overlay */}
      <div className="flex justify-evenly items-center w-[95%] md:w-[600px] rounded-3xl relative py-10 bg-white/90 backdrop-blur-sm">
        <div
          className="flex gap-4 items-center absolute top-5 left-4 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={roomstayLogo}
            alt="Logo"
            width={32}
            height={32}
            className="size-8 hover:scale-105 ease-in-out duration-500"
          />
          <span className="text-xl cursor-pointer font-extrabold hover:scale-105 ease-in-out duration-500">
            RoomStay
          </span>
        </div>

        <div className="flex flex-col flex-[0.8] lg:flex-[0.6] gap-6 items-center justify-center pt-16 ">
          <div className="flex flex-col items-center space-y-4 pb-6">
            <div className="text-2xl sm:text-4xl font-semibold">
              {`${type === "forget" ? "Change Password" : "Verify OTP"}`}
            </div>
            {/* <div className="text-xs font-normal text-center w-[80%] lg:w-[60%]">
              Simplify your workflow and boost your productivity with{" "}
              <span className="font-bold text-orange-500">Roomstay</span>. Get
              started for free
            </div> */}
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col justify-center gap-8 mb-10 w-full h-full ">
              <div className="w-full">
                <Label className=" font-semibold">Verify OTP</Label>
                <Input
                  type="number"
                  value={formValues.otp}
                  name="otp"
                  onChange={handleChange}
                  placeholder="Enter the OTP"
                  className="h-[50px]"
                />
              </div>
              {type === "forget" && (
                <div className="w-full flex flex-col gap-8">
                  <div>
                    <Label className=" font-semibold">Password</Label>
                    <div className="w-full relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        name={"password"}
                        value={formValues.password}
                        className="h-[50px]"
                        onChange={handleChange}
                      />

                      <div
                        className="absolute h-full flex items-center right-0 top-0 px-4 cursor-pointer"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? (
                          <EyeOpenIcon width={20} height={20} />
                        ) : (
                          <EyeClosedIcon width={20} height={20} />
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="font-semibold">Confirm Password</Label>
                    <div className=" w-full relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formValues.confirmPassword}
                        name={"confirmPassword"}
                        placeholder="Enter your confirm password"
                        className="h-[50px]"
                        onChange={handleChange}
                      />
                      <div
                        className="absolute h-full flex items-center right-0 top-0 px-4 cursor-pointer"
                        onClick={() => {
                          setShowConfirmPassword(!showConfirmPassword);
                        }}
                      >
                        {showConfirmPassword ? (
                          <EyeOpenIcon width={20} height={20} />
                        ) : (
                          <EyeClosedIcon width={20} height={20} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Button className="w-full py-6 rounded-2xl bg-neutral-900 hover:bg-neutral-800">
              Verify
            </Button>
          </form>

          <div className="pt-6">
            <div className=" cursor-pointer">
              <span className="text-blue-500 hover:text-blue-700" onClick={resendOtpHandler}>
                {" "}
                Resend OTP /
              </span>{" "}
              <span
                className="text-blue-500 hover:text-blue-700"
                onClick={() => {
                  router.push("/login");
                }}
              >
                {" "}
                Back to Login
              </span>
            </div>
          </div>
        </div>

        {/* <div className="hidden lg:flex w-full flex-[0.25] rounded-2xl lg:pt-12 lg:pb-24 lg:px-8 xl:pt-16 xl:pb-20 xl:pl-10 bg-gradient-to-r from-red-500 to-orange-500">
                      <div className="flex flex-col gap-8 min-w-[200px]">
                          <div className="flex flex-col w-full gap-2">
                              <CheckCircledIcon color="white" width={28} height={28} />
                              <div className="text-md xl:text-lg text-white">Quick and free log-in</div>
                              <div className="text-xs text-white">Enter your email address to login an account.</div>
                          </div>
                          <div className="flex flex-col  w-full gap-2">
                              <CheckCircledIcon color="white" width={28} height={28} />
                              <div className="text-md xl:text-lg text-white">Cross-platform soluation</div>
                              <div className="text-xs text-white">Preview your newsletters on any device before sending them out</div>
                          </div>
  
                          <div className="flex flex-col w-full gap-2">
                              <CheckCircledIcon color="white" width={28} height={28} />
                              <div className="text-md xl:text-lg text-white">Start sending emails</div>
                              <div className="text-xs text-white">Use our API or pick our pre-built templates.</div>
                          </div>
                      </div>
                  </div> */}
      </div>
    </div>
  );
};

export default Otp;
