"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { login } from "../../../api/userApi";
import { setCredentials } from "../../../utils/cookies";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { giveUserSliceObj } from "../../../utils/sliceMethod";
import { setUserSlice } from "../../../redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import roomstayLogo from "../../../assests/official/roomstay.png";
import Image from "next/image";
import { toast } from "sonner";
import backgroundImg from "../../../assests/Images/backgroundImg.png";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newObject = { ...formValues, [name]: value };
    setFormValues({ ...newObject });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formValues.email && formValues.password)) {
      alert("Please fill all the fields");
      return;
    }

    const apiData = {
      email: formValues.email,
      password: formValues.password,
    };

    try {
      const response = await login(apiData);
      if (response?.success) {
        if (response?.user) {
          // Set user details in redux ( User Slice )
          const userObj = giveUserSliceObj(response?.user);
          dispatch(setUserSlice(userObj));
          console.log(userObj, "userobj");

          const obj = {
            token: response.token,
          };
          setCredentials(obj);
          toast("Login successful", {
            description: "Welcome hustler",
            position: "top-center",
          });

          if (userObj?.isAdmin) {
            router.push("/dashboard");
          } else { 
            router.push("/");
          }
        }
      }
    } catch (error) {
      console.log(error, "1");
      toast("Something error", {
        description: "Welcome hustler",
        position: "top-center",
      });
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
        <div className="flex flex-col flex-[0.8] lg:flex-[0.5] gap-6 items-center justify-center pt-16">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl sm:text-4xl font-semibold">
              Welcome back!
            </div>
            <div className="text-xs font-normal text-center w-[80%] lg:w-[60%]">
              Simplify your workflow and boost your productivity with{" "}
              <span className="font-bold text-orange-500">Roomstay</span>. Get
              started for free.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col justify-center gap-8 mb-10 w-full h-full">
              <div>
                <Label className="font-semibold">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formValues.email}
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  className="h-[50px]"
                />
              </div>

              <div>
                <Label className="font-semibold">Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formValues.password}
                    placeholder="Enter password here"
                    onChange={handleChange}
                    className="h-[50px]"
                  />
                  <div
                    className="absolute h-full flex items-center right-0 top-0 px-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOpenIcon width={20} height={20} />
                    ) : (
                      <EyeClosedIcon width={20} height={20} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Button className="w-full py-6 rounded-2xl bg-neutral-900 hover:bg-neutral-800">
              Login
            </Button>
          </form>

          <div className="flex flex-col items-center gap-2 text-sm">
            <div>
              Don’t Have an Account?{" "}
              <span
                className="text-blue-600 font-semibold cursor-pointer"
                onClick={() => router.push("/signup")}
              >
                Sign up
              </span>
            </div>

            <div>
              Forget Account?{" "}
              <span
                className="text-blue-600 font-semibold cursor-pointer"
                onClick={() => router.push("/forget")}
              >
                Forget
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
