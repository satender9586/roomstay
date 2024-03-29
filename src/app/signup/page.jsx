"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import { signup } from "../../../api/userApi"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons"
import { setEmail } from "../../../redux/reducers/userSlice"

const Signup = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [formValues, setFormValues] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChecked = (e) => {
    setFormValues({ ...formValues, isAdmin: e.target.checked })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const newObject = { ...formValues, [name]: value }
    setFormValues({ ...newObject })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      !(
        formValues.fName &&
        formValues.lName &&
        formValues.email &&
        formValues.password &&
        formValues.confirmPassword
      )
    ) {
      alert("Please fill all the fields")
      return
    }

    const apiData = {
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      firstName: formValues.fName,
      lastName: formValues.lName,
      isAdmin: formValues.isAdmin,
    }

    try {
      const response = await signup(apiData)

      if (response.success) {
        dispatch(setEmail(formValues.email))
        router.push("/otp")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center p-5 bg-slate-50 h-[100dvh]">
      <div className=" flex flex-row  justify-center items-center w-full h-fill lg:w-[1110px] md:w-[800px] sm:w-[700px] p-10 bg-white rounded-3xl shadow-sm  ">
        <div className="h-[800px] w-full rounded-2xl flex flex-[0.7] p-20 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col w-[240px] gap-2">
              <CheckCircledIcon color="white" width={32} height={32} />
              <div className="text-xl text-white">Quick and free log-in</div>
              <div className="text-sm text-white">
                Enter your email address to login an account.
              </div>
            </div>
            <div className="flex flex-col  w-[240px] gap-2">
              <CheckCircledIcon color="white" width={32} height={32} />
              <div className="text-xl text-white">Cross-platform soluation</div>
              <div className="text-sm text-white">
                Preview your newsletters on any device before sending them out
              </div>
            </div>

            <div className="flex flex-col w-[240px] gap-2">
              <CheckCircledIcon color="white" width={32} height={32} />
              <div className="text-xl text-white">Start sending emails</div>
              <div className="text-sm text-white">
                Use our API or pick our pre-built templates.
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full  flex-[1.3] flex flex-col items-center justify-center ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-8 p-16 w-full h-full ">
              <div className="text-3xl pb-4">Create your account</div>

              <div className="flex gap-2 justify-evenly">
                <div>
                  <Label className=" font-semibold">First name</Label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-[50px]"
                    name="fName"
                    value={formValues.fName}
                    onChange={handleChange}
                  />
                </div>

                <div>
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
                      setShowPassword(!showPassword)
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
                    placeholder="Enter confirm password here"
                    className="h-[50px]"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                  />
                  <div
                    className="absolute h-full flex items-center right-0 top-0 px-4 cursor-pointer"
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword)
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

              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  className="size-6"
                  checked={formValues.isAdmin}
                  name="isAdmin"
                  onChange={handleChecked}
                />
                <Label className=" font-semibold">
                  Join as property owner{" "}
                </Label>
              </div>
              <Button
                className="w-[450px] h-[60px] rounded-xl  bg-neutral-700 hover:bg-neutral-900"
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </div>
          </form>
          <div className=" py-4">
            <div className=" cursor-pointer">
              Already Have an Account ?{" "}
              <span
                className="text-green-500"
                onClick={() => {
                  router.push("/login")
                }}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup