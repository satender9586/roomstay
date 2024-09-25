"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { forget } from "../../../api/userApi";
import { setEmail } from "../../../redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import roomstayLogo from "../../../assests/official/roomstay.png";
import Image from "next/image";
import { toast } from "sonner";
import backgroundImg from "../../../assests/Images/backgroundImg.png";

const Forget = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newObject = { ...formValues, [name]: value };
    setFormValues({ ...newObject });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formValues.email) {
      alert("Please fill all the fields");
      return;
    }

    const dummyData = {
      email: formValues.email,
    };

    try {
      const response = await forget(dummyData);
      if (response.success) {
        dispatch(setEmail(formValues.email));
        router.push(`/otp?type=forget`);
        toast("Otp sent successfully", {
          description: "Please check your inbox !",
          position: "top-center",
        });
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
      <div className="flex justify-evenly items-center w-[95%] md:w-[800px] rounded-3xl relative py-10 bg-white/90 backdrop-blur-sm">
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

        <div className="flex flex-col flex-[0.8] lg:flex-[0.5] gap-6 items-center justify-center pt-16 ">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl sm:text-4xl font-semibold">
              Forget Password
            </div>
            <div className="text-xs font-normal text-center w-[90%] ">
              Simplify your workflow and boost your productivity with
              <span className="font-bold text-orange-500"> Roomstay</span>. Get
              started for free
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full pt-4">
            <div className="flex flex-col justify-center gap-8 mb-10 w-full h-full ">
              <div>
                <Label className=" font-semibold">Email</Label>
                <Input
                  type="email"
                  value={formValues.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="h-[50px]"
                />
              </div>
            </div>
            <Button className=" w-full py-6 rounded-2xl bg-neutral-900 hover:bg-neutral-800">
              Forget
            </Button>
          </form>

          <div className=" cursor-pointer">
            Have an Account ?{" "}
            <span
              className="text-blue-600"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </span>
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

export default Forget;
