"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { signup } from "../../../api/userApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { setEmail } from "../../../redux/reducers/userSlice";
import roomstayLogo from "../../../assests/official/roomstay.png";
import Image from "next/image";
import backgroundImg from "../../../assests/Images/backgroundImg.png";
import { toast } from "sonner";
const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChecked = (e) => {
    setFormValues({ ...formValues, isAdmin: e.target.checked });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newObject = { ...formValues, [name]: value };
    setFormValues({ ...newObject });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !(
        formValues.fName &&
        formValues.lName &&
        formValues.email &&
        formValues.password &&
        formValues.confirmPassword
      )
    ) {
      alert("Please fill all the fields");
      return;
    }

    const apiData = {
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      firstName: formValues.fName,
      lastName: formValues.lName,
      isAdmin: formValues.isAdmin,
    };

    try {
      const response = await signup(apiData);

      if (response.success) {
        dispatch(setEmail(formValues.email));
        router.push("/otp");
        toast("Otp sent successful", {
          description: "Check your inbox please !",
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
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
      <div className="flex justify-evenly items-center w-[95%] md:w-[900px] rounded-3xl relative py-10 bg-white/90 backdrop-blur-sm">
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

        <div className="flex flex-col flex-[0.8] lg:flex-[0.5] gap-2 items-center justify-center pt-10 ">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl sm:text-4xl font-semibold">
              Start your journey with us
            </div>
            <div className="text-xs font-normal text-center w-[80%] ">
              Simplify your workflow and boost your productivity with{" "}
              <span className="font-bold text-orange-500">Roomstay</span>. Get
              started for free
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full pt-4">
            <div className="flex flex-col justify-center gap-6 mb-10 w-full h-full ">
              <div className="flex gap-2 justify-between">
                <div className="w-full">
                  <Label className=" font-semibold">First name</Label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-[50px] w-full"
                    name="fName"
                    value={formValues.fName}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <Label className=" font-semibold">Last name</Label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-[50px]"
                    name="lName"
                    value={formValues.lName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <Label className=" font-semibold">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-[50px]"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label className=" font-semibold">Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password here"
                    className="h-[50px]"
                    name="password"
                    value={formValues.password}
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
                <Label className=" font-semibold">Confirm Password</Label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter password here"
                    className="h-[50px]"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
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
            <div className="flex items-center justify-start gap-2 mb-4">
              <input
                type="checkbox"
                className="size-6"
                checked={formValues.isAdmin}
                name="isAdmin"
                onChange={handleChecked}
              />
              <Label className=" font-semibold">Join as property owner </Label>
            </div>
            <Button className="w-full py-6 rounded-2xl bg-neutral-900 hover:bg-neutral-800 mt-2">
              Sign up
            </Button>
          </form>

          <div className=" py-4">
            <div className=" cursor-pointer">
              Already Have an Account ?{" "}
              <span
                className="text-blue-500"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
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

export default Signup;
